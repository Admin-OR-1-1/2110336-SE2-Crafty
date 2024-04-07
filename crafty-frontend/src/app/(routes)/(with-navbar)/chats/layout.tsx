'use client';

import React, { useMemo } from 'react';
import SidebarBubble from './_component/SidebarBubble';
import { PostChatroom, SidebarData } from '@/app/_common/interface/chat';
import useSidebarDatas from './_hook/useSidebarDatas';
import { Button } from '@/app/_components/ui/input';
import { apiService } from '@/configs/apiService/apiService';
import userStore from '@/app/_common/store/user/user-store';

type ChatLayoutProps = {
  children: React.ReactNode;
};

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  const sidebarDatas = useSidebarDatas();
  const myId = userStore((state) => state.user.id);

  const sortedSidebarDatas = useMemo(() => {
    return [...sidebarDatas].sort((a, b) => {
      return new Date(b.lastChatTime).getTime() - new Date(a.lastChatTime).getTime();
    });
  }, [sidebarDatas]);

  const createChatroomWithAdmin = async () => {
    const postChatroom: PostChatroom = {
      crafterId: process.env.CRAFTEE_ADMIN_ID || 'admin_id',
      crafteeId: myId,
    };
    const response = await apiService.createNewChatroom(postChatroom);
    console.log(response);
    if (response.status === 'SUCCESS') {
      console.log('success');
      console.log(response.data);
      // refresh sidebar
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full">
      <aside className="flex w-[300px] flex-col gap-2 bg-ct_brown-100 pt-4" aria-label="Sidebar">
        <div className="mb-2 flex justify-center border-b pb-4 font-semibold">Chat History</div>
        <div className="flex h-full flex-col justify-between pb-5">
          <div className="flex flex-col gap-2">
            {sortedSidebarDatas.map((sidebarData: SidebarData) => {
              return (
                <SidebarBubble
                  key={sidebarData.chatroomId}
                  talkerName={sidebarData.talkerName}
                  lastChatTime={sidebarData.lastChatTime}
                  chatroomId={sidebarData.chatroomId}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button
              className="max-h-[34px] max-w-[140px] bg-ct_brown-300 text-sm font-medium"
              onClick={createChatroomWithAdmin}>
              Contact Admin
            </Button>
          </div>
        </div>
      </aside>
      <section className="h-full w-full flex-1">
        {children} {/* This is your main content area */}
      </section>
    </div>
  );
};

export default ChatLayout;
