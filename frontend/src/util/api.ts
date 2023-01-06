import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
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

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const {
//       config,
//       response: { status },
//     } = error;

//     if (status === 401) {
//       axios({
//         method: 'post',
//         url: `${baseURL}/auth/refresh`,
//       }).then((response) => {
//         const accessToken = response.data;
//         sessionStorage.setItem('token', accessToken);
//         config.headers['Authorization'] = 'Bearer ' + accessToken;
//         return axios(config);
//       });
//     }
//     return Promise.reject(error);
//   },
// );
