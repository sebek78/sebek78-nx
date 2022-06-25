import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, useState } from 'react';
import {
  Button,
  MessageLabel,
  Form,
  Flexbox,
  FormHeader,
  TextField,
} from '@sebek78-nx/ui';
import { loginSchema } from '@sebek78-nx/util';

import { User, ILoginFormInput, ApiError } from '@sebek78-nx/types';
import { loginUser } from '@sebek78-nx/data-access';
import { STORAGE_KEY } from '@sebek78-nx/util';

export interface LoginFormProps {
  closeForm: () => void;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export function LoginForm({ closeForm, setUser }: LoginFormProps) {
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader label="Logowanie" onClose={closeForm} />
      {error && <MessageLabel message={error} type="error" />}
      <TextField
        labelText="Nazwa użytkownika"
        message={errors.username?.message}
        messageType="error"
        register={register}
        inputLabel="username"
      />
      <TextField
        labelText="Hasło"
        message={errors.password?.message}
        messageType="error"
        register={register}
        inputLabel="password"
        type="password"
      />
      <Flexbox>
        <Button
          variant="success"
          label="Zaloguj"
          onClick={() => undefined}
          type="submit"
        />
      </Flexbox>
    </Form>
  );
}
