import { ToastOptions } from 'react-toastify';

export const API_URL = 'http://localhost:3333/api';
export const STORAGE_KEY = 'stock-user';
export const REFRESH_TOKEN_TIME = 12 * 60 * 1000; // 12 minutes, the token expires in 15 minutes

export const toastConfig: ToastOptions = {
  position: 'top-center',
  hideProgressBar: true,
  theme: 'colored',
};
