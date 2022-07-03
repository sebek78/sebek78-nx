import { yupResolver } from '@hookform/resolvers/yup';
import { ApiError, IChangePasswordFormInput } from '@sebek78-nx/types';
import { changePasswordSchema, successToast } from '@sebek78-nx/util';
import { AxiosError } from 'axios';
import { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
import { useMutation } from 'react-query';
import { changePassword } from '../../api';

export interface UseChangePassword {
  handleSubmit: UseFormHandleSubmit<IChangePasswordFormInput>;
  onSubmit: SubmitHandler<IChangePasswordFormInput>;
  error: string;
  errors: FieldErrors<IChangePasswordFormInput>;
  register: UseFormRegister<IChangePasswordFormInput>;
}

export function useChangePassword(onClose: () => void): UseChangePassword {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePasswordFormInput>({
    resolver: yupResolver(changePasswordSchema),
  });

  const mutation = useMutation(changePassword, {
    onSuccess: ({ data }) => {
      console.log(data);
      onClose();
      successToast('Hasło zostało zmienione');
    },
    onError: (error: AxiosError<ApiError>) => {
      setError(error.response?.data.message ?? 'Nieznany błąd');
    },
  });

  const onSubmit: SubmitHandler<IChangePasswordFormInput> = (
    data: IChangePasswordFormInput
  ) => {
    mutation.mutate(data);
  };

  return { handleSubmit, onSubmit, error, errors, register };
}
