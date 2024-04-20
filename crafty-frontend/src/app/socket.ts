import { io } from 'socket.io-client';

export const socket = io(
  `${process.env.NEXT_PUBLIC_API_ENDPOINT}` || 'https://crafty.thegoose.work',
  { path: '/api/v2/chats-sockets', transports: ['websocket'] }
);
