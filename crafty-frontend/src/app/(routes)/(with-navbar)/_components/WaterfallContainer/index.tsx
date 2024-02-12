'use client';

import { FC } from 'react';
import FeedCard from './_components/FeedCard';

const WaterfallContainer: FC = () => {
  return (
    <div className="mx-auto grid w-full max-w-[1300px] grid-cols-3 gap-x-4 gap-y-4 p-4">
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
