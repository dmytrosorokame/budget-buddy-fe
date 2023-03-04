import axios, { AxiosInstance } from 'axios';

import { logout } from '@/redux/auth/auth.slice';
import store from '@/redux/store';

const getAxiosInstance = (baseURL: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        store.dispatch(logout());
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default getAxiosInstance;
