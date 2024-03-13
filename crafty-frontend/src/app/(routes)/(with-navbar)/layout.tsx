'use client';

import useUserStore from '@/app/_common/store/user/hooks/useUserStore';
import Logo from '@assets/svgs/logo.svg';

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
  useUserStore();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="sticky top-0 z-50 flex h-16 w-full flex-row items-center gap-6 bg-ct_brown-200 px-10 max-md:justify-center">
        <div
          className="flex flex-row items-center gap-4 duration-100 hover:cursor-pointer hover:brightness-90"
          onClick={() => {
            window.location.href = '/';
          }}>
          <Logo className="" height={59} />
          <h1 className="text-2xl">Crafty</h1>
        </div>

        <a href="/feed-list" className="hover:underline">
          my post
        </a>

        <h1 className="ml-auto cursor-pointer text-red-500 hover:underline">Logout</h1>
      </div>
      <div className="flex-1 bg-ct_brown-100">{children}</div>
    </div>
  );
}
