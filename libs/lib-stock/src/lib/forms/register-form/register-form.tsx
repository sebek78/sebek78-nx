import {
  Button,
  Card,
  MessageLabel,
  Flexbox,
  Form,
  FormHeader,
  TextField,
} from '@sebek78-nx/ui';
import { useRegister } from '@sebek78-nx/data-access';

export interface RegisterFormProps {
  closeForm: () => void;
}

export function RegisterForm({ closeForm }: RegisterFormProps) {
  const { handleSubmit, onSubmit, error, errors, register } = useRegister({
    closeForm,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card>
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
          <Button variant="success" label="Rejestruj" type="submit" />
        </Flexbox>
      </Card>
    </Form>
  );
}
