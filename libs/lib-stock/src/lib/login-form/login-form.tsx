import { AxiosError, AxiosResponse } from 'axios';
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
import { User, ILoginFormInput } from '@sebek78-nx/types';
import { loginUser } from '@sebek78-nx/data-access';
import { StyledLoginForm } from './styled-login-form';

export interface LoginFormProps {
  closeLoginForm: () => void;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export function LoginForm({ closeLoginForm, setUser }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation(loginUser, {
    onSuccess: ({ data }: AxiosResponse) => {
      closeLoginForm();
      setUser(data.user);
    },
    onError: (error: AxiosError) => {
      // TODO: show login incorrect message
      console.log(error.response?.data);
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data: ILoginFormInput) => {
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
