import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '@sebek78-nx/util';
import { instance as axios } from '../../interceptor';

export interface UseApiQuery<T> {
  data: T | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export function useApiQuery<T>(dataKey: string, path: string): UseApiQuery<T> {
  const { data, error, isError, isLoading, isSuccess } = useQuery<
    T,
    AxiosError
  >(
    dataKey,
    async () => {
      const response = await axios({
        url: `${API_URL}${path}`,
        withCredentials: true,
        method: 'get',
      });

      return response.data;
    },
    {
      retry: false,
    }
  );

  return { data, error, isError, isLoading, isSuccess };
}
