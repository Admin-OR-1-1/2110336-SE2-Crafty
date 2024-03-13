import { formatDateTime } from '@/app/_common/utils/chatting';
import React from 'react';

interface MessageBubbleProps {
  message: string;
  isFromCurrentUser: boolean;
  date: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isFromCurrentUser, date }) => {
  const formattedDate = formatDateTime(date);

  // return 2 different version based on 'isFromCurrentUser'
  if (isFromCurrentUser) {
    // Right side
    return (
      <div className="flex flex-col px-4 pl-10">
        <div className="ml-auto flex max-w-[1000px] flex-wrap text-wrap break-all rounded-md bg-ct_gray-200 px-4 py-2">
          {message}
        </div>
        <div className="ml-auto mr-1 mt-1 flex text-xs">{formattedDate}</div>
      </div>
    );
  } else {
    // Left side
    return (
      <div className="flex flex-col px-4">
        <div className="mr-auto flex max-w-[1000px] flex-wrap break-all rounded-md bg-ct_gray-100 px-4 py-2">
          {message}
        </div>
        <div className="ml-1 mt-1 flex flex-wrap text-xs">{formattedDate}</div>
      </div>
    );
  }
};

export default MessageBubble;
