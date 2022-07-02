import { User } from '@sebek78-nx/types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Card, Flexbox, FormLabel, Separator } from '@sebek78-nx/ui';

export interface UserProfileProps {
  user: User;
}

const StyledUserProfile = styled.div`
  color: ${({ theme }) => theme.palette.text.default};
`;

export function UserProfile({ user }: UserProfileProps) {
  return (
    <StyledUserProfile>
      <Link to="/">Strona główna</Link>
      <Flexbox>
        <Card>
          <FormLabel text="Konto" />
          <Separator />
          <div>{`Użytkownik: ${user.username}`}</div>
          <Separator />
          <Flexbox>
            <Button label={'Zmiana hasła'} onClick={() => undefined} />
            <Button label={'Usuń konto'} onClick={() => undefined} />
          </Flexbox>
        </Card>
      </Flexbox>
    </StyledUserProfile>
  );
}
