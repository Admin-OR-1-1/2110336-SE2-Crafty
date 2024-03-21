'use client';

import { TextInput } from '@/app/_components/ui/input';
import { apiService } from '@/configs/apiService/apiService';
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

    await apiService.createNewMessage({
      chatroomId,
      senderId,
      content: text,
      messageType: 'TEXT',
    });

    setText('');
  };

  const submitImageMessage = async (imageUrl: string) => {
    await apiService.createNewMessage({
      chatroomId,
      senderId,
      content: imageUrl,
      messageType: 'IMAGE',
    });
  };

  const promptForImageUrl = () => {
    const imageUrl = window.prompt('Please enter the image URL:');
    if (imageUrl) {
      submitImageMessage(imageUrl);
    }
  };

  return (
    <div className="flex h-16 items-center justify-center gap-4 px-6 shadow-top">
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
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            submitMessage();
          }
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
