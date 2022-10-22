import { AxiosPromise, AxiosRequestConfig } from 'axios';
import {
  IChangePasswordFormInput,
  IDeleteUserFormInput,
  ILoginFormInput,
  IRegisterFormInput,
  LoginSuccess,
  RegisterSuccessResponse,
  SuccessResponse,
} from '@sebek78-nx/types';
import { API_URL } from '@sebek78-nx/util';
import { instance as axios } from './interceptor';

const defaultOptions: Partial<AxiosRequestConfig> = {
  method: 'post',
  withCredentials: true,
};

async function getRefreshToken() {
  const response = await axios({
    method: 'get',
    withCredentials: true,
    url: `${API_URL}/auth/refresh-tokens`,
  });

  return response.data;
}

const loginUser = (data: ILoginFormInput) =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/login`,
    data,
  }) as AxiosPromise<LoginSuccess>;

const logoutUser = () =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/logout`,
  }) as AxiosPromise<SuccessResponse>;

const registerUser = (data: IRegisterFormInput) =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/users`,
    withCredentials: false,
    data,
  }) as AxiosPromise<RegisterSuccessResponse>;

const changePassword = (data: IChangePasswordFormInput) =>
  axios({
    ...defaultOptions,
    method: 'patch',
    url: `${API_URL}/users/new-password`,
    data,
  }) as AxiosPromise<LoginSuccess>;

const deleteUser = (data: IDeleteUserFormInput) =>
  axios({
    ...defaultOptions,
    method: 'delete',
    url: `${API_URL}/users/delete`,
    withCredentials: true,
    data,
  }) as AxiosPromise<SuccessResponse>;

export {
  getRefreshToken,
  loginUser,
  logoutUser,
  registerUser,
  changePassword,
  deleteUser,
};
