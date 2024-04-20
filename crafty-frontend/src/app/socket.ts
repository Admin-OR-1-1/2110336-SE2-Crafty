import { io } from 'socket.io-client';

export const socket = io(
  `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v2` || 'https://crafty.thegoose.work/api/v2',
  { transports: ['websocket'] }
);
