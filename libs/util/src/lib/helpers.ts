import { User } from '@sebek78-nx/types';
import { STORAGE_KEY } from './constants';

export const guest: User = {
  id: -1,
  role: 'GUEST',
  username: '',
};

export const initialUser = (): User => {
  const userData = localStorage.getItem(STORAGE_KEY);

  return userData ? JSON.parse(userData) : guest;
};
