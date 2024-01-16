import Image from "next/image";
import { FC } from "react";

const FeedCard: FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <Image
        src={`https://picsum.photos/seed/${Math.random() * 1000}/500/${
          (Math.floor(Math.random() * 10) + 5) * 100
        }`}
        className="w-full h-auto"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/IX3tQAAAABJRU5ErkJggg=="
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
