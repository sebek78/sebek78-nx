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
import { useState } from 'react';
import { ChangePasswordForm } from '../forms/change-password-form/change-password-form';

export interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  const handlePasswordChange = () => {
    setShowChangePasswordForm(true);
  };
  const closePasswordChangeForm = () => {
    setShowChangePasswordForm(false);
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
          {showChangePasswordForm ? (
            <ChangePasswordForm onClose={closePasswordChangeForm} />
          ) : (
            <Flexbox>
              <Button label={'Zmiana hasła'} onClick={handlePasswordChange} />
              <Button label={'Usuń konto'} onClick={() => undefined} />
            </Flexbox>
          )}
        </Card>
      </Flexbox>
    </section>
  );
}
