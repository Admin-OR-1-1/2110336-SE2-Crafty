import Image from 'next/image';
import { FC } from 'react';
import FeedPreviewCard from './_components/FeedPreviewCard';

const FeedListPage: FC = () => {
  return (
    <div className="flex w-full flex-col gap-2 p-8">
      <div className="mx-auto grid h-fit w-full max-w-[1300px] gap-6">
        <span className="text-3xl font-bold">โพสต์ของฉัน</span>
        <div className="flex w-full flex-col gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FeedPreviewCard key={`feed ${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedListPage;
