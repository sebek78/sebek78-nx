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
import { registerSchema } from '@sebek78-nx/util';
import { ApiError, IRegisterFormInput } from '@sebek78-nx/types';
import { registerUser } from '@sebek78-nx/data-access';
import { Form } from '@sebek78-nx/ui';
import { useState } from 'react';

export interface RegisterFormProps {
  closeForm: () => void;
}

export function RegisterForm({ closeForm }: RegisterFormProps) {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>({
    resolver: yupResolver(registerSchema),
  });

  const mutation = useMutation(registerUser, {
    onSuccess: ({ data }) => {
      // TODO: show register success message
      console.log(data);
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
      <Flexbox justify="space-between">
        <FormLabel text="Rejestracja" />
        <CloseIcon onClick={closeForm} />
      </Flexbox>
      {error && <MessageLabel message={error} type="error" />}
      <InputLabel text="Nazwa użytkownika" />
      <MessageLabel message={errors.username?.message} type="error" />
      <TextInput register={register} label="username" />
      <InputLabel text="Hasło" />
      <MessageLabel message={errors.password?.message} type="error" />
      <TextInput register={register} label="password" type="password" />
      <InputLabel text="Powtórz hasło" />
      <MessageLabel message={errors.password2?.message} type="error" />
      <TextInput register={register} label="password2" type="password" />
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
