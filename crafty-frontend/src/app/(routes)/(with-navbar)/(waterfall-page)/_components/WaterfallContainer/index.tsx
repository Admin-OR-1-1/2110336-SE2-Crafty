'use client';

import { FC, useEffect } from 'react';
import FeedCard from './_components/FeedCard';
import { apiClient } from '@/configs/axiosConfig';

const WaterfallContainer: FC = () => {
  const fetchPosts = async () => {
    console.log('fetching posts');
    const response = await apiClient.get('/post/list');
    console.log('data', response.data);
  };
  return (
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-3 gap-x-2 gap-y-2 p-4 lg:gap-x-4 lg:gap-y-4">
      <button className="btn btn-primary" onClick={fetchPosts}>
        test
      </button>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div className="flex flex-col gap-4" key={i}>
            {Array.from({ length: 10 }).map((_, i) => {
              return <FeedCard key={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WaterfallContainer;
