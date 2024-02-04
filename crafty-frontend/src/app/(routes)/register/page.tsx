import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import VerticalLogo from '@assets/svgs/vertical_logo.svg';
import GmailIcon from '@assets/svgs/gmail_icon.svg';
import Link from 'next/link';

import LogoLeftSide from '@/app/_components/ui/logoLeftSide';

const Page = () => {
  return (
    <LogoLeftSide>
      <div className="flex w-[400px] flex-col items-center justify-center gap-y-6">
        <p className="text-center text-4xl font-bold text-ct_brown-500">ลงทะเบียน</p>
        <div className="flex w-full flex-col items-center justify-center gap-y-2">
          <input
            type="email"
            placeholder="example@email.com"
            className="input h-10 w-full rounded-lg border-2 border-ct_brown-500 py-4 focus:border-ct_brown-500 focus:outline-none active:outline-none"
          />
          <button className="btn h-10 min-h-0 w-full rounded-lg bg-ct_brown-500 text-base text-white">
            ต่อไป
          </button>
          <p className="w-full text-ct_brown-400">
            มีบัญชีผู้ใช้แล้ว?{' '}
            <Link href={'/login'}>
              <span className="cursor-pointer font-bold text-ct_brown-500 hover:underline">
                ล็อกอิน
              </span>
            </Link>
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-x-2">
          <div className="flex h-0.5 flex-grow items-center rounded-full bg-ct_brown-500"></div>
          <p className="text-ct_brown-500">หรือ</p>
          <div className="flex h-0.5 flex-grow items-center rounded-full bg-ct_brown-500"></div>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <button className="btn w-48 flex-row items-center rounded-xl bg-white">
            <FaFacebook className="h-8 w-auto text-[#1877f2]" />
            <p className="text-ct_brown-500">Facebook</p>
          </button>
          <button className="btn w-48 flex-row items-center rounded-xl bg-white">
            <GmailIcon className="h-6 w-auto" />
            <p className="text-ct_brown-500">Gmail</p>
          </button>
        </div>
        <p className="w-full text-sm text-ct_brown-300">
          การลงทะเบียน เป็นไปตามข้อกำหนดของ{' '}
          <span className="cursor-pointer font-bold text-ct_brown-500 underline">
            นโยบายความเป็นส่วนตัว
          </span>
        </p>
      </div>
    </LogoLeftSide>
  );
};

export default Page;
