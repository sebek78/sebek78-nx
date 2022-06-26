import { useState, Dispatch } from 'react';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import {
  useForm,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@sebek78-nx/util';
import { User, ILoginFormInput, ApiError } from '@sebek78-nx/types';
import { loginUser } from '../../api';
import { STORAGE_KEY } from '@sebek78-nx/util';

export interface UseLoginArgs {
  closeForm: () => void;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export interface UseLogin<ILoginFormInput> {
  handleSubmit: UseFormHandleSubmit<ILoginFormInput>;
  onSubmit: SubmitHandler<ILoginFormInput>;
  error: string;
  errors: FieldErrors<ILoginFormInput>;
  register: UseFormRegister<ILoginFormInput>;
}

export function useLogin({
  closeForm,
  setUser,
}: UseLoginArgs): UseLogin<ILoginFormInput> {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation(loginUser, {
    onSuccess: ({ data }) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.user));
      closeForm();
      setUser(data.user);
    },
    onError: (error: AxiosError<ApiError>) => {
      setError(error.response?.data.message ?? 'Nieznany błąd');
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data: ILoginFormInput) => {
    mutation.mutate(data);
  };

  return { handleSubmit, onSubmit, error, errors, register };
}
