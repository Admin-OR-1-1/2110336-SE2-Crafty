import axios from 'axios';

const apiPath = 'http://localhost:5000';

const getMyToken = (): string => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiY2hhdF91c2VyMV9pZCIsInVzZXJuYW1lIjoiY2hhdF91c2VyMSIsInJvbGUiOiJVU0VSIn0sImlhdCI6MTcxMDMzMTUzM30.rUw31dKTUKpU7EqxGATIPDTlCkA7yV8DN9t3iBeldag';
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
