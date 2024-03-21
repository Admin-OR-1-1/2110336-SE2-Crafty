'use client';

import { FC, useEffect, useState } from 'react';
import MessageBubble from '../_component/MessageBubble';
import ChatHeader from '../_component/ChatHeader';
import ChatInput from '../_component/ChatInput';
import { ChatroomDetail, Message } from '@/app/_common/interface/chat';
import userStore from '@/app/_common/store/user/user-store';
import useChatroomDetail from '../_hook/useChatroomDetail';
import Image from 'next/image';
import { socket } from '../socket';

type PageProps = {
  params: {
    chatroomId: string;
  };
};

const ChatRoomPage: FC<PageProps> = ({ params }) => {
  const chatroomDetail = useChatroomDetail(params.chatroomId);
  const myId = userStore((state) => state.user.id);
  const myName = userStore((state) => state.user.username);
  const messages = chatroomDetail?.messages;

  useEffect(() => {
    socket.connect();
    socket.emit('joinRoom', params.chatroomId);

    return () => {
      socket.emit('leaveRoom', params.chatroomId);
      socket.disconnect();
    };
  }, [params.chatroomId]);

  const talkerName =
    chatroomDetail?.crafter.username === myName
      ? chatroomDetail?.craftee.username
      : chatroomDetail?.crafter.username;

  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full flex-row">
      <div className="flex h-full min-h-[calc(100vh-64px)] w-full flex-col">
        <ChatHeader name={talkerName ?? ''} />
        <div className="flex-1 flex-col space-y-4 overflow-y-auto py-4">
          {messages?.map((message: Message) => {
            return (
              <MessageBubble
                key={message.id}
                message={message.content}
                messageType={message.messageType}
                isFromCurrentUser={message.senderId === myId}
                date={message.date}
              />
            );
          })}
        </div>
        <ChatInput chatroomId={params.chatroomId} senderId={myId} />
      </div>
      <div className="flex min-h-[calc(100vh-64px)] min-w-[300px] max-w-[300px] flex-col gap-2 border-l bg-ct_brown-100 p-3">
        <span className="text-2xl font-semibold">Your Order</span>
        <div className="flex w-full border-t border-ct_brown-400" />
        <span className="text-2xl">Title for order</span>
        <span className="text-md break-all">
          description for order description for order description for orderdescription for order
          description for order description for orderdescription for order description for order
          description for orderdescription for order description for order description for
          orderdescription for order description for order description for order
        </span>

        <div className="flex w-full overflow-hidden rounded-lg">
          <Image
            src="https://picsum.photos/seed/asdawf/1000/1000"
            className="h-fit w-full overflow-hidden rounded-lg object-cover"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            width={5000}
            height={5000}
            alt={`Image`}
            loading="lazy"
          />
        </div>

        <span className="mt-2 break-all text-2xl font-semibold">ราคา: ฿1,000</span>

        <button className="btn mt-auto bg-green-200 hover:bg-green-300">ยืนยันการสั่งซื้อ</button>
      </div>
    </div>
  );
};

export default ChatRoomPage;
