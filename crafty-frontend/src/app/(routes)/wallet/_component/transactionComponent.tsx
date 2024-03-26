'use client';

import React, { FC } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';

interface Props {
  type: 'Topup' | 'Buy' | 'Sell';
  amount: number;
  timestamp: Date;
}

const TransactionComponent: FC<Props> = ({ type, amount, timestamp }) => {
  const monthNumberToShortThaiMonth = (monthNumber: number): string | undefined => {
    const thaiMonths: string[] = [
      'ม.ค.', // January
      'ก.พ.', // February
      'มี.ค.', // March
      'เม.ย.', // April
      'พ.ค.', // May
      'มิ.ย.', // June
      'ก.ค.', // July
      'ส.ค.', // August
      'ก.ย.', // September
      'ต.ค.', // October
      'พ.ย.', // November
      'ธ.ค.', // December
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
      return thaiMonths[monthNumber - 1];
    } else {
      return `${convertToTwoDigitString(monthNumber)}`; // Invalid month number
    }
  };
  const getDateFromDate = (unix: Date) => {
    const date = new Date(unix);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear() + 543;
    return `${convertToTwoDigitString(day)} ${monthNumberToShortThaiMonth(month)} ${year}`;
  };
  const convertToTwoDigitString = (num: number) => {
    // Convert number to string
    let numberString = num.toString();

    // If the length of the string is 1, prepend '0' to make it two digits
    if (numberString.length === 1) {
      numberString = '0' + numberString;
    }

    return numberString;
  };

  const getTimeFromDate = (unix: Date) => {
    const date = new Date(unix);
    const gmt = (-1 * date.getTimezoneOffset()) / 60;
    const hour = date.getUTCHours() + gmt;
    const minute = date.getUTCMinutes();
    return `${convertToTwoDigitString(hour)}:${convertToTwoDigitString(minute)}`;
  };

  if (type === 'Topup')
    return (
      <div className="relative flex w-full items-center gap-x-3 rounded-xl bg-white px-4 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="absolute right-3 top-3 flex flex-col items-end">
          <p className="text-ct_pos font-medium">+{amount.toFixed(2)} ฿</p>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-ct_gray-200">
          <FaPlus color="white" className="h-8 w-8" />
        </div>
        <div className="flex flex-1 flex-col gap-y-1 py-1">
          <p className="font-bold text-ct_brown-500">เติมเงิน</p>
          <p className="text-sm text-ct_gray-400">
            {getDateFromDate(timestamp)} {getTimeFromDate(timestamp)}
          </p>
        </div>
      </div>
    );
  else if (type === 'Buy')
    return (
      <div className="relative flex w-full items-center gap-x-3 rounded-xl bg-white px-4 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <p className="absolute right-3 top-3 text-sm text-ct_gray-400">
          {getDateFromDate(timestamp)}
        </p>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-ct_gray-200">
          <HiMiniArrowRightOnRectangle color="white" className="h-8 w-8" />
        </div>
        <div className="flex flex-1 flex-col gap-y-1 py-1">
          <p className="font-bold text-ct_brown-500">ซื้อสินค้า</p>
          <p className="text-ct_neg font-medium">-{amount.toFixed(2)} ฿</p>
        </div>
      </div>
    );
  else if (type === 'Sell')
    return (
      <div className="relative flex w-full items-center gap-x-3 rounded-xl bg-white px-4 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <p className="absolute right-3 top-3 text-sm text-ct_gray-400">
          {getDateFromDate(timestamp)}
        </p>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-ct_gray-200">
          <p className="select-none text-center text-4xl font-normal text-white">฿</p>
        </div>
        <div className="flex flex-1 flex-col gap-y-1 py-1">
          <p className="font-bold text-ct_brown-500">ขายสินค้า</p>
          <p className="text-ct_pos font-medium">+{amount.toFixed(2)} ฿</p>
        </div>
      </div>
    );
};

export default TransactionComponent;
