import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import {
  useForm,
  SubmitHandler,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { registerSchema, successToast } from '@sebek78-nx/util';
import { ApiError, IRegisterFormInput } from '@sebek78-nx/types';
import { registerUser } from '../../api';

export interface UseRegisterArgs {
  closeForm: () => void;
}

export interface UseRegister<IRegisterFormInput> {
  handleSubmit: UseFormHandleSubmit<IRegisterFormInput>;
  onSubmit: SubmitHandler<IRegisterFormInput>;
  error: string;
  errors: FieldErrors<IRegisterFormInput>;
  register: UseFormRegister<IRegisterFormInput>;
}

export function useRegister({
  closeForm,
}: UseRegisterArgs): UseRegister<IRegisterFormInput> {
  const [error, setError] = useState('');
  const notify = (username: string) =>
    successToast(`Zarejestrowano ${username}. Zaloguj się.`);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>({
    resolver: yupResolver(registerSchema),
  });

  const mutation = useMutation(registerUser, {
    onSuccess: ({ data }) => {
      notify(data.username);
      closeForm();
    },
    onError: (error: AxiosError<ApiError>) => {
      setError(error.response?.data.message ?? 'Nieznany błąd');
    },
  });

  const onSubmit: SubmitHandler<IRegisterFormInput> = (
    data: IRegisterFormInput
  ) => {
    mutation.mutate(data);
  };

  return { handleSubmit, onSubmit, error, errors, register };
}
