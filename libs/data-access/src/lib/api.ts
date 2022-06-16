import axios, { AxiosRequestConfig } from 'axios';
import { ILoginFormInput } from '@sebek78-nx/types';
import { API_URL } from '@sebek78-nx/util';

const defaultOptions: Partial<AxiosRequestConfig> = {
  method: 'post',
  withCredentials: true,
};

export const loginUser = (data: ILoginFormInput) =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/login`,
    data,
  });

export const logoutUser = () =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/logout`,
  });
