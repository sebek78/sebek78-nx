import { useState } from 'react';
import styled from 'styled-components';
import { User } from '@sebek78-nx/types';
import { Header } from '../header/header';
import { Homepage } from '../homepage/homepage';

const StyledAppRoot = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.default};
  min-height: 100vh;
`;

const guest: User = {
  id: -1,
  role: 'GUEST',
  username: '',
};

export function AppRoot() {
  const [user, setUser] = useState<User>(guest);

  return (
    <StyledAppRoot>
      <Header user={user} setUser={setUser} />
      <Homepage />
    </StyledAppRoot>
  );
}

export default AppRoot;
