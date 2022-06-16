import styled from 'styled-components';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  CloseIcon,
  ErrorLabel,
  Flexbox,
  FormLabel,
  InputLabel,
  TextInput,
} from '@sebek78-nx/ui';
import { schema } from './schema';
import { Dispatch } from 'react';
import { User } from '@sebek78-nx/types';

export interface LoginFormProps {
  closeLoginForm: () => void;
  setUser: Dispatch<React.SetStateAction<User>>;
}

interface IFormInput {
  username: string;
  password: string;
}

const StyledLoginForm = styled.form`
  width: 320px;
  padding: 8px 16px 16px;
  position: absolute;
  top: 136px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.palette.background.subtle};
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  border-radius: 6px;
`;

export function LoginForm({ closeLoginForm, setUser }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation(
    (data: IFormInput) => {
      return axios({
        method: 'post',
        url: 'http://localhost:3333/api/auth/login',
        data,
        withCredentials: true,
      });
    },
    {
      onSuccess: (response: AxiosResponse) => {
        closeLoginForm();
        setUser(response.data.user);
      },
      onError: (error: AxiosError) => {
        console.log(error);
      },
    }
  );

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    mutation.mutate(data);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Flexbox justify="space-between">
        <FormLabel text="Logowanie" />
        <CloseIcon onClick={closeLoginForm} />
      </Flexbox>
      <InputLabel text="Nazwa użytkownika" />
      <ErrorLabel message={errors.username?.message} />
      <TextInput register={register} label="username" />
      <InputLabel text="Hasło" />
      <ErrorLabel message={errors.password?.message} />
      <TextInput register={register} label="password" type="password" />
      <Flexbox>
        <Button
          variant="success"
          label="Zaloguj"
          onClick={() => undefined}
          type="submit"
        />
      </Flexbox>
    </StyledLoginForm>
  );
}
