import { io } from 'socket.io-client';

const socket_url = process.env.NEXT_PUBLIC_WEBSOCKET_URL || '';

export const socket = io(socket_url, {
  autoConnect: false,
});
