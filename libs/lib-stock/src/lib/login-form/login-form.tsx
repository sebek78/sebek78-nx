import { Dispatch } from 'react';
import {
  Button,
  Card,
  MessageLabel,
  Form,
  Flexbox,
  FormHeader,
  TextField,
} from '@sebek78-nx/ui';
import { User } from '@sebek78-nx/types';
import { useLogin } from '@sebek78-nx/data-access';

export interface LoginFormProps {
  closeForm: () => void;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export function LoginForm({ closeForm, setUser }: LoginFormProps) {
  const { handleSubmit, onSubmit, error, errors, register } = useLogin({
    closeForm,
    setUser,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card>
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
      </Card>
    </Form>
  );
}
