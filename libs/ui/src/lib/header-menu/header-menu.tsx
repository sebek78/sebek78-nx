import styled from 'styled-components';
import { User } from '@sebek78-nx/types';
import { Button } from '../atoms/button/button';
import { Flexbox } from '../atoms/flexbox/flexbox';
import { LinkButton } from '../atoms/link-button/link-button';

interface HeaderMenuProps {
  openLoginForm: () => void;
  openRegisterForm: () => void;
  isOpenLoginForm: boolean;
  isOpenRegisterForm: boolean;
  user: User;
  logout: () => void;
}

const StyledHeaderMenu = styled.div`
  width: 100%;
  height: 60px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: max-content;
  }
`;

export function HeaderMenu({
  openLoginForm,
  openRegisterForm,
  isOpenLoginForm,
  isOpenRegisterForm,
  user,
  logout,
}: HeaderMenuProps) {
  return (
    <StyledHeaderMenu>
      {!isOpenLoginForm && !isOpenRegisterForm && !user.username && (
        <Flexbox>
          <Button label="Rejestracja" onClick={openRegisterForm} />
          <Button label="Logowanie" onClick={openLoginForm} />
        </Flexbox>
      )}
      {user.username && (
        <Flexbox>
          <LinkButton onClick={logout} label="Wyloguj" />
        </Flexbox>
      )}
    </StyledHeaderMenu>
  );
}
