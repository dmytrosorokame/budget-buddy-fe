import axios, { AxiosInstance } from 'axios';

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

  return axiosInstance;
};

export default getAxiosInstance;
