import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(
  (response) => response,
  function (error) {
    console.log(error.response.status, error.code, error.message);
    return Promise.reject(error);
  }
);

export { instance };
