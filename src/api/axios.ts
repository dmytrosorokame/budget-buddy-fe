import axios, { AxiosInstance } from 'axios';

const getAxiosInstance = (): AxiosInstance => {
  const axiosInstance = axios.create();

  return axiosInstance;
};

export default getAxiosInstance;
