import { ApiError, IDeleteUserFormInput } from '@sebek78-nx/types';
import { useState } from 'react';
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { deleteUserSchema, STORAGE_KEY } from '@sebek78-nx/util';
import { useMutation } from 'react-query';
import { deleteUser } from '../../api';
import { AxiosError } from 'axios';

export interface UseDeleteUser {
  handleSubmit: UseFormHandleSubmit<IDeleteUserFormInput>;
  onSubmit: SubmitHandler<IDeleteUserFormInput>;
  error: string;
  errors: FieldErrors<IDeleteUserFormInput>;
  register: UseFormRegister<IDeleteUserFormInput>;
}

export function useDeleteUser(username: string): UseDeleteUser {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDeleteUserFormInput>({
    resolver: yupResolver(deleteUserSchema),
    context: { username },
  });

  const mutation = useMutation(deleteUser, {
    onSuccess: ({ data }) => {
      // localStorage.removeItem(STORAGE_KEY);
      console.log(data);
      // TODO: navigate to main path, toast
    },
    onError: (error: AxiosError<ApiError>) => {
      setError(error.response?.data.message ?? 'Nieznany błąd');
    },
  });

  const onSubmit: SubmitHandler<IDeleteUserFormInput> = () => {
    mutation.mutate();
  };

  return { handleSubmit, onSubmit, error, errors, register };
}
