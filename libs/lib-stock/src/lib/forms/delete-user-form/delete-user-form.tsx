import { User } from '@sebek78-nx/types';
import { useDeleteUser } from '@sebek78-nx/data-access';
import {
  Button,
  Flexbox,
  FormHeader,
  MessageLabel,
  TextField,
} from '@sebek78-nx/ui';
import { Dispatch, SetStateAction } from 'react';

export interface DeleteUserFormProps {
  closeForm: () => void;
  username: string;
  setUser: Dispatch<SetStateAction<User>>;
}

export function DeleteUserForm({
  closeForm,
  username,
  setUser,
}: DeleteUserFormProps) {
  const { handleSubmit, onSubmit, error, errors, register } = useDeleteUser(
    username,
    setUser
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader label="Usuń konto" onClose={closeForm} />
      {error && <MessageLabel message={error} type="error" />}
      <TextField
        labelText="Nazwa użytkownika"
        message={errors.username?.message}
        messageType="error"
        register={register}
        inputLabel="username"
      />
      <Flexbox>
        <Button variant="danger" label="Usuń konto" type="submit" />
      </Flexbox>
    </form>
  );
}
