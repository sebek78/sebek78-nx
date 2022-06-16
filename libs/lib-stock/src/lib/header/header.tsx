import { Dispatch, useState } from 'react';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { User } from '@sebek78-nx/types';
import { Flexbox, HeaderMenu, PagePadding, PageTitle } from '@sebek78-nx/ui';
import { LoginForm } from '../login-form/login-form';
import { StyledHeader } from './styled-header';
import { guest } from '@sebek78-nx/util';
import { logoutUser } from '@sebek78-nx/data-access';

interface HeaderProps {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export function Header({ user, setUser }: HeaderProps) {
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const mutation = useMutation(logoutUser, {
    onSuccess: () => {
      setUser(guest);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

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
