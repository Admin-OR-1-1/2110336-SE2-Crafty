'use client';

import LoadingPage from '@/app/_components/common-component/loading';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FC, useEffect } from 'react';
import useFeedDetail from '../../../_hooks/feedDetail';

import { useForm, SubmitHandler } from 'react-hook-form';
import { PostForm } from './types';

const FeedEditPage: FC = () => {
  const param = useParams();
  const feedId = param.feedId;

  const { init, post } = useFeedDetail(String(feedId));

  const { register, handleSubmit, reset } = useForm<PostForm>();

  const onSubmit: SubmitHandler<PostForm> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (post) {
      reset({
        ...post,
      });
    }
  }, [post, reset]);

  if (!init) return <LoadingPage />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex w-full flex-col gap-2 p-8">
        <div className="mx-auto grid h-fit w-full max-w-[1300px] grid-cols-2 rounded-xl bg-white max-md:grid-cols-1">
          {/* image */}
          <div className="flex h-full w-full flex-col gap-8 p-10 pr-10 max-md:mx-auto max-md:max-w-[400px] md:pr-5">
            {post?.photoUrl && (
              <div className="carousel w-full overflow-hidden rounded-xl">
                <div className="carousel-item relative w-full">
                  <Image
                    src={post?.photoUrl}
                    className="h-fit w-full object-contain"
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    width={50000}
                    height={50000}
                    alt={`Image`}
                    loading="lazy"
                  />
                  {/* <button className="btn btn-circle absolute right-5 top-5 border-none bg-red-500 text-sm text-white hover:bg-red-300">
                X
              </button> */}
                  {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${i - 1}`} className="btn btn-circle opacity-60">
                  ❮
                </a>
                <a href={`#slide${i + 1}`} className="btn btn-circle opacity-60">
                  ❯
                </a>
              </div> */}
                </div>
              </div>
            )}
            <button className="btn btn-circle flex w-full border-[3px] border-ct_brown-500 !bg-white text-xl font-bold">
              + เปลี่ยนรูปภาพ
            </button>
          </div>

          {/* detail */}
          <div className="flex h-full w-full flex-col gap-8 p-10 pl-10 md:pl-5">
            <div className="flex flex-row items-center gap-4">
              <input
                className="input w-full text-xl"
                placeholder="ชื่อสินค้า"
                {...register('title', { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xl">เริ่มต้นที่</span>
              <input
                className="input w-full text-xl [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                placeholder="ราคาสินค้า"
                {...register('price', { required: true })}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-lg">รายละเอียดสินค้า</span>
                <textarea
                  className="textarea textarea-bordered rounded-md"
                  placeholder="รายละเอียดสินค้า"
                  {...register('detail', { required: true })}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg">สิ่งที่ Custom ได้</span>
                <textarea
                  className="textarea textarea-bordered rounded-md"
                  placeholder="สิ่งที่ Custom ได้"
                  {...register('content', { required: true })}
                />
              </div>
            </div>

            <button
              className="btn ml-auto w-fit bg-ct_brown-500 text-lg text-white hover:bg-ct_brown-300"
              type="submit">
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FeedEditPage;
