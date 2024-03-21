'use client';

import { ChatroomDetail, Message, ReadChatroom, SidebarData } from '@/app/_common/interface/chat';
import userStore from '@/app/_common/store/user/user-store';
import { apiService } from '@/configs/apiService/apiService';
import { ApiStatus } from '@/configs/apiService/types';
import { useEffect, useState } from 'react';
import { socket } from '../socket';

const useChatroomDetail = (chatroomId: string) => {
  const [chatroomDetail, setChatroomDetail] = useState<ChatroomDetail | null>(null);

  useEffect(() => {
    const fetchChatroomDetail = async () => {
      const response = await apiService.getChatroomDetail(chatroomId);
      if (response.status === ApiStatus.SUCCESS) setChatroomDetail(response.data);
    };
    fetchChatroomDetail();

    const handleMessage = (newMessage: Message) => {
      setChatroomDetail((currentDetail) => {
        if (!currentDetail) return null;
        return {
          ...currentDetail,
          messages: [...currentDetail.messages, newMessage],
        };
      });
    };

    socket.on('newMessage', handleMessage);

    return () => {
      socket.off('newMessage', handleMessage);
    };
  }, []);

  return chatroomDetail;
};

export default useChatroomDetail;
