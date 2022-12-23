import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000/',
  headers: {
    ContentType: 'application/json',
  },
<<<<<<< HEAD
  // withCredentials: true,
=======
  withCredentials: true,
>>>>>>> 8d162815032f84a4aacbc2e810f42c4f227a9e90
};

export const api: AxiosInstance = axios.create(config);

api.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem('token');
    if (config.headers && accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
