import { Dispatch, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { User } from '@sebek78-nx/types';
import { Flexbox, HeaderMenu, PagePadding, PageTitle } from '@sebek78-nx/ui';
import { LoginForm } from '../login-form/login-form';
import { StyledHeader } from './styled-header';
import { guest } from '@sebek78-nx/util';

interface HeaderProps {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export function Header({ user, setUser }: HeaderProps) {
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const mutation = useMutation(
    () => {
      return axios({
        url: 'http://localhost:3333/api/auth/logout',
        method: 'post',
        withCredentials: true,
        data: {},
      });
    },
    {
      onSuccess: (response: AxiosResponse) => {
        console.log(response.data);
        setUser(guest);
      },
      onError: (error: AxiosError) => {
        console.log(error);
      },
    }
  );

  const handleOpenLoginForm = () => setOpenLoginForm(true);
  const handleCloseLoginForm = () => setOpenLoginForm(false);
  const logout = () => mutation.mutate();

  return (
    <StyledHeader>
      <PagePadding>
        <Flexbox wrap="wrap" justify="space-between">
          <PageTitle title="Projekt:&nbsp;Ekonomia" />
          <HeaderMenu
            user={user}
            openLoginForm={handleOpenLoginForm}
            isOpenLoginForm={openLoginForm}
            logout={logout}
          />
        </Flexbox>
      </PagePadding>
      {openLoginForm && (
        <LoginForm closeLoginForm={handleCloseLoginForm} setUser={setUser} />
      )}
    </StyledHeader>
  );
}
