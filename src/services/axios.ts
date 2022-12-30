import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  responseType: 'json',
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error?.response?.data || 'Something went wrong!'),
);

export default axiosInstance;
