import axios from 'axios';
import { Message, PostMessage } from '../interface/chat';

const apiPath = 'http://localhost:5000';

const getMyToken = (): string => {
  return localStorage.getItem('token') || '';
};

const getMyName = async (token: string): Promise<string> => {
  // using axios to fetch from localhost:5000/auth/me
  // add bearer token to the header

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (await axios.get(`${apiPath}/auth/me`, config)).data.username;
};

const getMyId = async (token: string): Promise<string> => {
  // using axios to fetch from localhost:5000/auth/me
  // add bearer token to the header

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (await axios.get(`${apiPath}/auth/me`, config)).data.id;
};

const formatDateTime = (date: string): string => {
  // '2024-03-13T07:37:33.866Z' -> '13/03/24 - 19:37'
  const d = new Date(date);
  const year = d.getFullYear().toString().slice(-2);
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hour = d.getHours().toString().padStart(2, '0');
  const minute = d.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} - ${hour}:${minute}`;
};

const createNewMessage = async (postMessage: PostMessage): Promise<Message> => {
  const token = getMyToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //   console.log(postMessage);
  const res = await axios.post<Message>(`${apiPath}/chats/message`, postMessage, config);
  return res.data;
};

export { getMyName, getMyToken, getMyId, formatDateTime, createNewMessage, apiPath };
