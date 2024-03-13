import React from 'react';

interface MessageBubbleProps {
  message: string;
  isFromCurrentUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isFromCurrentUser }) => {
  // return 2 different version based on 'isFromCurrentUser'
  if (isFromCurrentUser) {
    // Right side
    return (
      <div className="flex">
        <div className="ml-auto flex max-w-[1000px] text-wrap break-words rounded-md bg-ct_gray-200 px-4 py-2">
          {message}
        </div>
      </div>
    );
  } else {
    // Left side
    return (
      <div className="flex">
        <div className="flex max-w-80 flex-wrap text-wrap rounded-md bg-ct_gray-100 px-4 py-2">
          {message}
        </div>
      </div>
    );
  }
};

export default MessageBubble;
