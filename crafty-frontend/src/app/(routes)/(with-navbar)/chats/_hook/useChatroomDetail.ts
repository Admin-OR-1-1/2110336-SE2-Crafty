'use client';

import {
  ChatroomDetail,
  ProductDetail,
  ReadChatroom,
  SidebarData,
} from '@/app/_common/interface/chat';
import userStore from '@/app/_common/store/user/user-store';
import { apiService } from '@/configs/apiService/apiService';
import { ApiStatus } from '@/configs/apiService/types';
import { useEffect, useState } from 'react';

const useChatroomDetail = (chatroomId: string) => {
  const [chatroomDetail, setChatroomDetail] = useState<ChatroomDetail | null>(null);
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);

  useEffect(() => {
    const fetchChatroomDetail = async () => {
      const response = await apiService.getChatroomDetail(chatroomId);
      if (response.status === ApiStatus.SUCCESS) {
        setChatroomDetail(response.data);
        setProductDetail(response.data.Product);
        // console.log(response.data.Product?.step);
      }
    };
    fetchChatroomDetail();
    const intervalId = setInterval(fetchChatroomDetail, 3000); // Fetch every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return { chatroomDetail, productDetail };
};

export default useChatroomDetail;
