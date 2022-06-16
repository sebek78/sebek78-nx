import { useState } from 'react';
import styled from 'styled-components';
import { User } from '@sebek78-nx/types';
import { Header } from '../header/header';
import { Homepage } from '../homepage/homepage';
import { guest } from '@sebek78-nx/util';

const StyledAppRoot = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.default};
  min-height: 100vh;
`;

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
