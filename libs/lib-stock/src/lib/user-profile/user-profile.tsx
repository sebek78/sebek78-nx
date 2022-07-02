import { User } from '@sebek78-nx/types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Card, Flexbox, FormLabel, Separator } from '@sebek78-nx/ui';
import { useState } from 'react';
import { ChangePasswordForm } from '../forms/change-password-form/change-password-form';

export interface UserProfileProps {
  user: User;
}

const StyledUserProfile = styled.div`
  color: ${({ theme }) => theme.palette.text.default};
`;

export function UserProfile({ user }: UserProfileProps) {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  const handlePasswordChange = () => {
    setShowChangePasswordForm(true);
  };
  const closePasswordChangeForm = () => {
    setShowChangePasswordForm(false);
  };

  return (
    <StyledUserProfile>
      <Link to="/">Strona główna</Link>
      <Flexbox>
        <Card>
          <FormLabel text="Konto" />
          <Separator />
          <div>{`Użytkownik: ${user.username}`}</div>
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
    </StyledUserProfile>
  );
}
