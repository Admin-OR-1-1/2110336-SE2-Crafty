'use client';

import { createNewMessage } from '@/app/_common/utils/chatting';
import { TextInput } from '@/app/_components/ui/input';
import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { LuImagePlus } from 'react-icons/lu';

interface ChatInputProps {
  chatroomId: string;
  senderId: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ chatroomId, senderId }) => {
  const [text, setText] = useState('');
  const submitMessage = async () => {
    console.log('submitted text:', text);
    if (text === '') return;
    const res = await createNewMessage({
      chatroomId,
      senderId,
      content: text,
      messageType: 'TEXT',
    });
    setText('');
    console.log(res);
  };
  const submitImageMessage = async (imageUrl: string) => {
    console.log('submitted image:', imageUrl);
    const res = await createNewMessage({
      chatroomId,
      senderId,
      content: imageUrl,
      messageType: 'IMAGE',
    });
    console.log(res);
  };
  const promptForImageUrl = () => {
    const imageUrl = window.prompt('Please enter the image URL:');
    if (imageUrl) {
      submitImageMessage(imageUrl);
    }
  };

  return (
    <div className="shadow-top flex h-16 items-center justify-center gap-4 px-6">
      <div className="image-icon">
        <LuImagePlus
          size={28}
          className="text-ct_brown-500 hover:cursor-pointer"
          onClick={promptForImageUrl}
        />
      </div>

      <TextInput
        placeholder="Type a message"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <div className="send-icon">
        <IoIosSend
          size={28}
          className="text-ct_brown-500 hover:cursor-pointer"
          onClick={submitMessage}
        />
      </div>
    </div>
  );
};

export default ChatInput;
