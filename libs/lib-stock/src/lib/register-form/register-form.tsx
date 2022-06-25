import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  MessageLabel,
  Flexbox,
  Form,
  FormHeader,
  TextField,
} from '@sebek78-nx/ui';
import { registerSchema, toastConfig } from '@sebek78-nx/util';
import { ApiError, IRegisterFormInput } from '@sebek78-nx/types';
import { registerUser } from '@sebek78-nx/data-access';

export interface RegisterFormProps {
  closeForm: () => void;
}

export function RegisterForm({ closeForm }: RegisterFormProps) {
  const [error, setError] = useState('');
  const notify = (username: string) =>
    toast.success(`Zarejestrowano ${username}. Zaloguj się.`, toastConfig);

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader label="Rejestracja" onClose={closeForm} />
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
      <TextField
        labelText="Powtórz hasło"
        message={errors.password2?.message}
        messageType="error"
        register={register}
        inputLabel="password2"
        type="password"
      />
      <Flexbox>
        <Button
          variant="success"
          label="Rejestruj"
          onClick={() => undefined}
          type="submit"
        />
      </Flexbox>
    </Form>
  );
}
