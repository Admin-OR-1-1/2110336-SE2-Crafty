import axios from 'axios';
import { FC } from 'react';
import MessageBubble from '../_component/MessageBubble';
import { apiPath, getMyId, getMyName, getMyToken } from '@/app/_common/utils/chatting';
import ChatHeader from '../_component/ChatHeader';
import ChatInput from '../_component/ChatInput';

type PageProps = {
  params: {
    chatroomId: string;
  };
};

const getChatroomDetails = async (chatroomId: string) => {
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
  const chatroomDetails = await getChatroomDetails(params.chatroomId);
  const messages = chatroomDetails.messages;
  const myId = await getMyId(getMyToken());
  const myName = await getMyName(getMyToken());

  const talkerName =
    chatroomDetails.crafter.username === myName
      ? chatroomDetails.craftee.username
      : chatroomDetails.crafter.username;

  return (
    <div className="flex h-screen flex-col">
      <ChatHeader name={talkerName} />
      <div className="flex-1 flex-col space-y-4 overflow-y-auto py-4">
        {messages.map((message: Message) => {
          return (
            <MessageBubble
              key={message.id}
              message={message.content}
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
