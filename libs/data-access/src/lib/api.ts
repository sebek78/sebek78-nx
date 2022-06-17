import { AxiosRequestConfig } from 'axios';
import { ILoginFormInput } from '@sebek78-nx/types';
import { API_URL } from '@sebek78-nx/util';
import { instance as axios } from './interceptor';

const defaultOptions: Partial<AxiosRequestConfig> = {
  method: 'post',
  withCredentials: true,
};

const loginUser = (data: ILoginFormInput) =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/login`,
    data,
  });

const logoutUser = () =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/logout`,
  });

export { loginUser, logoutUser };
