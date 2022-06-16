import styled from 'styled-components';
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

export interface LoginFormProps {
  closeLoginForm: () => void;
}

interface IFormInput {
  login: string;
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

export function LoginForm({ closeLoginForm }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) =>
    console.log(data);

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Flexbox justify="space-between">
        <FormLabel text="Logowanie" />
        <CloseIcon onClick={closeLoginForm} />
      </Flexbox>
      <InputLabel text="Login" />
      <ErrorLabel message={errors.login?.message} />
      <TextInput register={register} label="login" />
      <InputLabel text="Password" />
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
