import { useChangePassword } from '@sebek78-nx/data-access';
import {
  Button,
  Flexbox,
  FormHeader,
  MessageLabel,
  TextField,
} from '@sebek78-nx/ui';

export interface ChangePasswordFormProps {
  onClose: () => void;
}

export function ChangePasswordForm({ onClose }: ChangePasswordFormProps) {
  const { handleSubmit, onSubmit, error, errors, register } =
    useChangePassword(onClose);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader label="Zmień hasło" onClose={onClose} />
      {error && <MessageLabel message={error} type="error" />}
      <TextField
        labelText="Stare hasło"
        message={errors.oldPassword?.message}
        messageType="error"
        register={register}
        inputLabel="oldPassword"
        type="password"
      />
      <TextField
        labelText="Nowe hasło"
        message={errors.newPassword?.message}
        messageType="error"
        register={register}
        inputLabel="newPassword"
        type="password"
      />
      <TextField
        labelText="Powtórz nowe hasło"
        message={errors.newPassword2?.message}
        messageType="error"
        register={register}
        inputLabel="newPassword2"
        type="password"
      />
      <Flexbox>
        <Button
          variant="success"
          label="Wyślij"
          onClick={() => undefined}
          type="submit"
        />
      </Flexbox>
    </form>
  );
}
