'use client';

import { ChatroomDetail, ReadChatroom, SidebarData } from '@/app/_common/interface/chat';
import userStore from '@/app/_common/store/user/user-store';
import { apiService } from '@/configs/apiService/apiService';
import { ApiStatus } from '@/configs/apiService/types';
import { useEffect, useState } from 'react';

const useChatroomDetail = (chatroomId: string) => {
  const [chatroomDetail, setChatroomDetail] = useState<ChatroomDetail | null>(null);

  useEffect(() => {
    const fetchChatroomDetail = async () => {
      const response = await apiService.getChatroomDetail(chatroomId);
      if (response.status === ApiStatus.SUCCESS) setChatroomDetail(response.data);
    };
    fetchChatroomDetail();
  }, []);

  return chatroomDetail;
};

export default useChatroomDetail;
