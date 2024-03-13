import axios from 'axios';
import { FC } from 'react';
import MessageBubble from '../_component/MessageBubble';
import { apiPath, getMyId, getMyName, getMyToken } from '@/app/_common/utils/chatting';

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
  const myName = await getMyId(getMyToken());

  console.log(chatroomDetails);
  return (
    <div className="flex h-screen flex-col">
      <div className="flex justify-center bg-purple-400">This is ChatHeader</div>
      <div className="flex-1 flex-col space-y-4 overflow-y-auto py-4">
        {messages.map((message: Message) => {
          return (
            <MessageBubble
              key={message.id}
              message={message.content}
              isFromCurrentUser={message.senderId === myName}
            />
          );
        })}
      </div>
      <div className="flex h-16 justify-center bg-pink-400">This is ChatInput</div>
    </div>
    // <ChatHeader name={params.chatroomId}/>
  );
};

export default ChatRoomPage;
