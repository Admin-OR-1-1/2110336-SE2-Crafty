'use client';

import { FC } from 'react';
import FeedCard from './_components/FeedCard';
import useFeedList from '../../../_hooks/allFeed';
import LoadingPage from '@/app/_components/common-component/loading';

const WaterfallContainer: FC = () => {
  const { init, posts } = useFeedList();

  if (!init) return <LoadingPage />;

  return (
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-3 gap-x-2 p-4 max-lg:px-2 lg:gap-x-4 lg:gap-y-4">
      {Array.from({ length: 3 }).map((_, i) => {
        let currentPosts = [];
        for (let j = i; j < posts.length; j += 3) {
          currentPosts.push(posts[j]);
        }

        return (
          <div className="flex flex-col  gap-y-2 lg:gap-4" key={i}>
            {currentPosts.map((post) => (
              <FeedCard key={post.id} post={post} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default WaterfallContainer;
