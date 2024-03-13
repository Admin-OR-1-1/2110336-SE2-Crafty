'use client';

import { useRouter } from 'next/navigation';

const shortDate = (date: string) => {
  // '2024-03-13T07:37:33.866Z' -> '13/03/24 - 19:37'
  const d = new Date(date);
  const year = d.getFullYear().toString().slice(-2);
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hour = d.getHours().toString().padStart(2, '0');
  const minute = d.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} - ${hour}:${minute}`;
};

const SidebarBubble = ({ talkerName, lastChatTime, chatroomId }: SidebarData) => {
  const router = useRouter();

  const handleClick = () => {
    // navigate to the chatroom
    console.log(chatroomId);
    router.push(`/chats/${chatroomId}`);
  };

  return (
    <div className="px-4 py-2 hover:cursor-pointer hover:bg-ct_gray-100" onClick={handleClick}>
      <div className="text-xs text-ct_gray-600">{shortDate(lastChatTime)}</div>
      <div className="text-sm">{talkerName}</div>
    </div>
  );
};

export default SidebarBubble;
