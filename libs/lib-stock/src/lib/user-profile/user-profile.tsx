import { User } from '@sebek78-nx/types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Flexbox,
  FormLabel,
  Separator,
  Text,
} from '@sebek78-nx/ui';
import { Dispatch, SetStateAction, useState } from 'react';
import { ChangePasswordForm } from '../forms/change-password-form/change-password-form';
import { DeleteUserForm } from '../forms/delete-user-form/delete-user-form';

export interface UserProfileProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export function UserProfile({ user, setUser }: UserProfileProps) {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [showDeleteUserForm, setShowDeleteUserForm] = useState(false);

  const handlePasswordChange = () => {
    setShowChangePasswordForm(true);
  };
  const closePasswordChangeForm = () => {
    setShowChangePasswordForm(false);
  };

  const handleShowDeleteUserForm = () => {
    setShowDeleteUserForm(true);
  };
  const closeDeleteUserForm = () => {
    setShowDeleteUserForm(false);
  };

  return (
    <section>
      <Link to="/">Strona główna</Link>
      <Flexbox>
        <Card>
          <FormLabel text="Konto" />
          <Separator />
          <Text>{`Użytkownik: ${user.username}`}</Text>
          <Separator />
          {showChangePasswordForm && (
            <ChangePasswordForm onClose={closePasswordChangeForm} />
          )}
          {showDeleteUserForm && (
            <DeleteUserForm
              closeForm={closeDeleteUserForm}
              username={user.username}
              setUser={setUser}
            />
          )}
          {!showChangePasswordForm && !showDeleteUserForm && (
            <Flexbox>
              <Button label={'Zmiana hasła'} onClick={handlePasswordChange} />
              <Button
                variant="danger"
                label={'Usuń konto'}
                onClick={handleShowDeleteUserForm}
              />
            </Flexbox>
          )}
        </Card>
      </Flexbox>
    </section>
  );
}
