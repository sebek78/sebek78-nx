import { ApiError, IDeleteUserFormInput, User } from '@sebek78-nx/types';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { deleteUserSchema, guest, STORAGE_KEY } from '@sebek78-nx/util';
import { useMutation } from 'react-query';
import { deleteUser } from '../../api';
import { AxiosError } from 'axios';
import { successToast } from '@sebek78-nx/util';
import { useNavigate } from 'react-router-dom';

export interface UseDeleteUser {
  handleSubmit: UseFormHandleSubmit<IDeleteUserFormInput>;
  onSubmit: SubmitHandler<IDeleteUserFormInput>;
  error: string;
  errors: FieldErrors<IDeleteUserFormInput>;
  register: UseFormRegister<IDeleteUserFormInput>;
}

export function useDeleteUser(
  username: string,
  setUser: Dispatch<SetStateAction<User>>
): UseDeleteUser {
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      if (data.success) {
        localStorage.removeItem(STORAGE_KEY);
        successToast('Konto zostało usunięte.');
        setUser(guest);
        navigate('/');
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      setError(error.response?.data.message ?? 'Nieznany błąd');
    },
  });

  const onSubmit: SubmitHandler<IDeleteUserFormInput> = (
    data: IDeleteUserFormInput
  ) => {
    mutation.mutate(data);
  };

  return { handleSubmit, onSubmit, error, errors, register };
}
