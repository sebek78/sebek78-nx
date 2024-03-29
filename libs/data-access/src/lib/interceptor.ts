import { STORAGE_KEY } from '@sebek78-nx/util';
import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    if (error.response.status === 401) {
      console.log('Unauthorized user', new Date().toLocaleTimeString());
      localStorage.removeItem(STORAGE_KEY);
      window.location.assign('/');
    } else {
      console.log('RSE:', error.response.status, error.code, error.message);
    }
    return Promise.reject(error);
  }
);

export { instance };
