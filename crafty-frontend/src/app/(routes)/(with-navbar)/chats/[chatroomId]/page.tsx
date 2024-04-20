'use client';

import { FC, useEffect, useState } from 'react';
import MessageBubble from '../_component/MessageBubble';
import ChatHeader from '../_component/ChatHeader';
import ChatInput from '../_component/ChatInput';
import { ChatroomDetail, Message } from '@/app/_common/interface/chat';
import userStore from '@/app/_common/store/user/user-store';
import useChatroomDetail from '../_hook/useChatroomDetail';
import ProductSidebar from '../_component/ProductSidebar';
import { io } from 'socket.io-client';
import { socket } from '@/app/socket';
type PageProps = {
  params: {
    chatroomId: string;
  };
};

// const socket = io('http://localhost:5000', { transports: ['websocket'] });

const ChatRoomPage: FC<PageProps> = ({ params }) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      console.log('Connected to WebSocket server (Page)');
    };

    const onDisconnect = () => {
      setIsConnected(false);
      console.log('Disconnected from WebSocket server (Page)');
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, [params.chatroomId]);

  // normal code
  const { chatroomDetail, productDetail } = useChatroomDetail(params.chatroomId);
  const myId = userStore((state) => state.user.id);
  const myName = userStore((state) => state.user.username);

  const messages = chatroomDetail?.messages;

  const talkerName =
    chatroomDetail?.crafter.username === myName
      ? chatroomDetail?.craftee.username
      : chatroomDetail?.crafter.username;
  const senderName =
    chatroomDetail?.crafter.username === myName
      ? chatroomDetail?.crafter.username
      : chatroomDetail?.craftee.username;

  const isCrafter = chatroomDetail?.crafterId === myId;
  const postId = chatroomDetail?.postId || null;
  const isOtherChat = chatroomDetail?.crafterId !== myId && chatroomDetail?.crafteeId !== myId;

  return (
    <div className="flex w-full flex-row overflow-hidden">
      <div className="relative flex h-full w-full">
        <div className="mr-2 flex h-full max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] w-full flex-col pr-3">
          <ChatHeader
            name={
              isOtherChat ? (talkerName ? `${talkerName} - ${senderName}` : '.') : talkerName ?? ''
            }
          />

          <div className="flex-1 space-y-4 overflow-y-auto py-4">
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
          <div>
            <ChatInput chatroomId={params.chatroomId} senderId={myId} />
          </div>
        </div>
        <ProductSidebar
          product={productDetail}
          chatroomId={params.chatroomId}
          isCrafter={isCrafter}
          postId={postId}
        />
      </div>
    </div>
  );
};

export default ChatRoomPage;
