'use client';

import { apiService } from '@/configs/apiService/apiService';
import Logo from '@assets/svgs/logo.svg';
import { useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { signOut } from 'firebase/auth';
import { auth } from '@/configs/firebaseConfig';
import useUserStore from '@/app/_common/store/user/hooks/useUserStore';
import { apiClient } from '@/configs/axiosConfig';
import { ApiStatus } from '@/configs/apiService/types';
import { useRouter } from 'next/navigation';

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
  useUserStore();
  const router = useRouter();
  const [openUserModal, setOpenUserModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const deleteUserHandler = async () => {
    // const responseUser = await apiService.getMe();
    if (confirmPrompt !== 'ลบบัญชี') return;
    const responseUser = await apiClient.get('/auth/me');
    console.log(responseUser);
    const responseDelete = await apiService.deleteUser(responseUser.data.id);
    if (responseDelete.status === ApiStatus.SUCCESS) {
      signOut(auth);
      localStorage.removeItem('token');
      router.push('/login');
    }
  };
  const [confirmPrompt, setConfirmPrompt] = useState('');

  const logoutHandler = async () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`flex min-h-screen ${confirmModal && 'h-screen overflow-hidden'} w-full flex-col`}>
      {confirmModal && (
        <div className="absolute z-[100] flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-xl bg-white px-16 py-8">
            <p className="select-none text-2xl font-bold text-red-600">ลบบัญชี</p>
            <div className="select-none">
              กรอก <span className="font-bold">{"'ลบบัญชี'"}</span> เพื่อยืนยัน
            </div>
            <input
              id="text-field"
              type="tel"
              placeholder="ลบบัญชี"
              className="input flex w-[240px] border-2 border-solid border-ct_gray-300 bg-transparent outline-none focus:border-ct_brown-500 focus:outline-none active:outline-none"
              onChange={(e) => {
                setConfirmPrompt(e.target.value);
              }}
              value={confirmPrompt}
            />
            <div className="flex w-[240px] items-center justify-between">
              <button
                className="right-0 m-0 inline-flex min-h-[3rem] w-full min-w-[80px] cursor-pointer appearance-none items-center justify-center rounded-xl border-0 bg-ct_gray-400 px-6 py-2 text-center text-base font-medium leading-normal tracking-wide text-white no-underline hover:bg-ct_gray-500 md:h-14 md:w-auto"
                type="submit"
                onClick={() => {
                  setConfirmModal(false);
                }}>
                ยกเลิก
              </button>
              <button
                className="right-0 m-0 inline-flex min-h-[3rem] w-full min-w-[80px] cursor-pointer appearance-none items-center justify-center rounded-xl border-0 bg-red-600 px-6 py-2 text-center text-base font-medium leading-normal tracking-wide text-white no-underline hover:bg-red-800 md:h-14 md:w-auto"
                type="submit"
                onClick={() => {
                  deleteUserHandler();
                }}>
                ลบบัญชี
              </button>
            </div>
          </div>
        </div>
      )}
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
                  setConfirmModal(true);
                }}>
                Delete this Account
              </h1>
              <h1 className="cursor-pointer text-red-500 hover:underline" onClick={logoutHandler}>
                Logout
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 bg-ct_brown-100">{children}</div>
    </div>
  );
}
