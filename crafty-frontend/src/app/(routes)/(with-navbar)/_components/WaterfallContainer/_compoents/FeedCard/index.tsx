import Image from "next/image";
import { FC } from "react";

const FeedCard: FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <Image
        src={`https://picsum.photos/seed/${Math.random() * 1000}/500/${
          (Math.floor(Math.random() * 10) + 5) * 100
        }`}
        className="w-full h-auto overflow-hidden"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        width={5000}
        height={5000}
        alt={`Image`}
        loading="lazy"
      />

      {/* Masking */}
      <div className="absolute flex w-full h-full bg-[#000] z-20 top-0 opacity-0 hover:opacity-25 hover:cursor-pointer duration-100" />
    </div>
  );
};

export default FeedCard;
