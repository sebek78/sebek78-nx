import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  CloseIcon,
  MessageLabel,
  Flexbox,
  FormLabel,
  InputLabel,
  TextInput,
} from '@sebek78-nx/ui';
import { loginSchema } from '@sebek78-nx/util';
import { Dispatch, useState } from 'react';
import { User, ILoginFormInput, ApiError } from '@sebek78-nx/types';
import { loginUser } from '@sebek78-nx/data-access';
import { Form } from '@sebek78-nx/ui';
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
      <Flexbox justify="space-between">
        <FormLabel text="Logowanie" />
        <CloseIcon onClick={closeForm} />
      </Flexbox>
      {error && <MessageLabel message={error} type="error" />}
      <InputLabel text="Nazwa użytkownika" />
      <MessageLabel message={errors.username?.message} type="error" />
      <TextInput register={register} label="username" />
      <InputLabel text="Hasło" />
      <MessageLabel message={errors.password?.message} type="error" />
      <TextInput register={register} label="password" type="password" />
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
