'use client';

import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import MessageBubble from '../_component/MessageBubble';
import { apiPath, getMyId, getMyName, getMyToken } from '@/app/_common/utils/chatting';
import ChatHeader from '../_component/ChatHeader';
import ChatInput from '../_component/ChatInput';
import { ChatroomDetail, Message } from '@/app/_common/interface/chat';

type PageProps = {
  params: {
    chatroomId: string;
  };
};

const getChatroomDetail = async (chatroomId: string) => {
  // using axios to fetch from localhost:5000/chats/:chatroomId
  // add bearer token to the header

  // const token = localStorage.getItem('token');
  const token = getMyToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(`${apiPath}/chats/${chatroomId}`, config);
  return res.data;
};

const ChatRoomPage: FC<PageProps> = async ({ params }) => {
  const [chatroomDetail, setChatroomDetail] = useState<ChatroomDetail | null>(null);
  const [myId, setMyId] = useState<string>('');
  const [myName, setMyName] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChatroomDetail(params.chatroomId);
      setChatroomDetail(data);
      const myId = await getMyId(getMyToken());
      setMyId(data);
      const myName = await getMyName(getMyToken());
      setMyName(myName);
    };
    fetchData();
  }, []);

  const messages = chatroomDetail?.messages;

  const talkerName =
    chatroomDetail?.crafter.username === myName
      ? chatroomDetail?.craftee.username
      : chatroomDetail?.crafter.username;

  return (
    <div className="flex h-screen flex-col">
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
