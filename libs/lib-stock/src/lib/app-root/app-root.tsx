import { useState } from 'react';
import styled from 'styled-components';
import { User } from '@sebek78-nx/types';
import { guest } from '@sebek78-nx/util';
import { Header } from '../header/header';
import { Homepage } from '../homepage/homepage';
import { MainPage } from '../main-page/main-page';
import { AdminPage } from '../admin-page/admin-page';

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
      {user.role === 'GUEST' && <Homepage />}
      {user.role === 'USER' && <MainPage />}
      {user.role === 'ADMIN' && <AdminPage />}
    </StyledAppRoot>
  );
}

export default AppRoot;
