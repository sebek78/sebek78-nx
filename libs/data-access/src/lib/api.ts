import { AxiosRequestConfig } from 'axios';
import { ILoginFormInput } from '@sebek78-nx/types';
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
  });

const logoutUser = () =>
  axios({
    ...defaultOptions,
    url: `${API_URL}/auth/logout`,
  });

export { getRefreshToken, loginUser, logoutUser };
