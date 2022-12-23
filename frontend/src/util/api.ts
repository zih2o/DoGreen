import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000/',
  headers: {
    ContentType: 'application/json',
  },
  // withCredentials: true,
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
