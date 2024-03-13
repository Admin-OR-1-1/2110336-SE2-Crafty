'use client';

import { FC } from 'react';
import MessageBubble from '../_component/MessageBubble';
import ChatHeader from '../_component/ChatHeader';
import ChatInput from '../_component/ChatInput';
import { ChatroomDetail, Message } from '@/app/_common/interface/chat';
import userStore from '@/app/_common/store/user/user-store';
import useChatroomDetail from '../_hook/useChatroomDetail';

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

  const talkerName =
    chatroomDetail?.crafter.username === myName
      ? chatroomDetail?.craftee.username
      : chatroomDetail?.crafter.username;

  return (
    <div className="flex h-full min-h-[calc(100vh-64px)] flex-col">
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
  );
};

export default ChatRoomPage;
