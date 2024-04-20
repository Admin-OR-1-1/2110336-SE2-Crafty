// _hook/useSocket.ts
import { useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (url: string) => {
  useEffect(() => {
    const socket = io(url, { transports: ['websocket'] });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('receiveMessage', (message) => {
      console.log('New message received:', message);
      // TODO
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socket.off('connect');
      socket.off('receiveMessage');
      socket.off('disconnect');
      socket.close();
    };
  }, [url]);

  return null;
};

export default useSocket;
