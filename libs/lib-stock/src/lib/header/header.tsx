import { Dispatch, memo, useState } from 'react';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { User } from '@sebek78-nx/types';
import { Flexbox, HeaderMenu, PagePadding, PageTitle } from '@sebek78-nx/ui';
import { LoginForm } from '../forms/login-form/login-form';
import { StyledHeader } from './styled-header';
import { guest, STORAGE_KEY } from '@sebek78-nx/util';
import { logoutUser } from '@sebek78-nx/data-access';
import { RegisterForm } from '../forms/register-form/register-form';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
}

export const Header = memo(function Header({ user, setUser }: HeaderProps) {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const navigate = useNavigate();

  const mutation = useMutation(logoutUser, {
    onSuccess: ({ data }) => {
      if (data.success) {
        localStorage.removeItem(STORAGE_KEY);
        setUser(guest);
      }
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  const handleOpenLoginForm = () => setOpenLoginForm(true);
  const handleCloseLoginForm = () => setOpenLoginForm(false);
  const handleOpenRegisterForm = () => setOpenRegisterForm(true);
  const handleCloseRegisterForm = () => setOpenRegisterForm(false);
  const logout = () => mutation.mutate();
  const goToProfile = () => navigate('/profile');

  return (
    <StyledHeader>
      <PagePadding>
        <Flexbox wrap="wrap" justify="space-between">
          <PageTitle title="Projekt:&nbsp;Ekonomia" />
          <HeaderMenu
            user={user}
            openLoginForm={handleOpenLoginForm}
            openRegisterForm={handleOpenRegisterForm}
            isOpenLoginForm={openLoginForm}
            isOpenRegisterForm={openRegisterForm}
            logout={logout}
            goToProfile={goToProfile}
          />
        </Flexbox>
      </PagePadding>
      {openLoginForm && (
        <LoginForm closeForm={handleCloseLoginForm} setUser={setUser} />
      )}
      {openRegisterForm && <RegisterForm closeForm={handleCloseRegisterForm} />}
    </StyledHeader>
  );
});
