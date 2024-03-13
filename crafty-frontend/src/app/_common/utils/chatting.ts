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

export { getMyName, getMyToken, getMyId };
export { apiPath };
