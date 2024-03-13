'use client';

import { apiService } from '@/configs/apiService/apiService';
import Logo from '@assets/svgs/logo.svg';
import { useState } from 'react';
import { IoMdPerson } from 'react-icons/io';

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
  const [openUserModal, setOpenUserModal] = useState(false);
  const deleteUserHandler = async () => {
    const responseUser = await apiService.getMe();
    console.log(responseUser);
    // const response = await apiService.deleteUser(responseUser.status);
  };
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
        <div className="relative ml-auto">
          <div
            className="cursor-pointer rounded-full bg-ct_brown-100 p-2 hover:bg-ct_gray-200"
            onClick={() => {
              setOpenUserModal(!openUserModal);
            }}>
            <IoMdPerson className="h-6 w-6 text-ct_brown-500" />
          </div>
          {openUserModal && (
            <div className="absolute right-0 flex w-56 flex-col items-start gap-y-4 rounded-xl bg-white p-4 shadow-xl">
              <h1
                className="cursor-pointer text-ct_brown-500 hover:underline"
                onClick={() => {
                  deleteUserHandler();
                }}>
                Delete this Account
              </h1>
              <h1 className="cursor-pointer text-red-500 hover:underline">Logout</h1>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 bg-ct_brown-100">{children}</div>
    </div>
  );
}
