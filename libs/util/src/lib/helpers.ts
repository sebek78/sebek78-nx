import { User } from '@sebek78-nx/types';
import { STORAGE_KEY, toastConfig } from './constants';
import { toast } from 'react-toastify';

export const guest: User = {
  id: -1,
  role: 'GUEST',
  username: '',
};

export const initialUser = (): User => {
  const userData = localStorage.getItem(STORAGE_KEY);

  return userData ? JSON.parse(userData) : guest;
};

export function successToast(text: string) {
  toast.success(text, toastConfig);
}
