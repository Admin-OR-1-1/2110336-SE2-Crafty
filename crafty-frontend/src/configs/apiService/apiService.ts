import axios from 'axios';
import { LoginResponse } from './interface';
import { ApiResponseType, ApiStatus } from './types';

class ApiService {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:5000';
  }
  setToken = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  login = async (username: string, password: string): Promise<ApiResponseType<LoginResponse>> => {
    try {
      const response = await axios.post('/auth/login', { username, password });
      this.setToken(response.data.token);

      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      return {
        status: ApiStatus.SUCCESS,
        data: response.data,
      };
    } catch {
      return {
        status: ApiStatus.ERROR,
        errorMessage: 'Invalid username or password',
      };
    }
  };

  // bypass for now
  loginWithId = async (uid: string): Promise<ApiResponseType<LoginResponse>> => {
    try {
      const response = await axios.post('/auth/login', { uid });
      this.setToken(response.data.token);
      return {
        status: ApiStatus.SUCCESS,
        data: response.data,
      };
    } catch {
      return {
        status: ApiStatus.ERROR,
        errorMessage: 'Invalid uid',
      };
    }
  };
}

export const apiService = new ApiService();