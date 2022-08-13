import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SuccessResponse } from '@sebek78-nx/types';
import { initialUser, REFRESH_TOKEN_TIME } from '@sebek78-nx/util';
import { Header } from '../header/header';
import { Homepage } from '../homepage/homepage';
import { MainPage } from '../main-page/main-page';
import { AdminPage } from '../admin-page/admin-page';
import { getRefreshToken } from '@sebek78-nx/data-access';

const StyledAppRoot = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.default};
  min-height: 100vh;
`;

export function AppRoot() {
  const [updateTime, setUpdateTime] = useState(-1);
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (user.role !== 'GUEST') {
      id = setTimeout(async () => {
        const response: SuccessResponse = await getRefreshToken();
        if (response.success) {
          setUpdateTime(Date.now());
        }
      }, REFRESH_TOKEN_TIME);
    }

    return () => clearTimeout(id);
  }, [updateTime, user.role]);

  return (
    <StyledAppRoot>
      <Header user={user} setUser={setUser} />
      {user.role === 'GUEST' && <Homepage />}
      {user.role === 'USER' && <MainPage user={user} setUser={setUser} />}
      {user.role === 'ADMIN' && <AdminPage />}
    </StyledAppRoot>
  );
}
