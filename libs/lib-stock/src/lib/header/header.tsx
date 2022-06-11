import styled from 'styled-components';
import { useState } from 'react';
import { Flexbox, HeaderMenu, PagePadding, PageTitle } from '@sebek78-nx/ui';
import { LoginForm } from '../login-form/login-form';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.background.subtle};
  height: 120px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 80px;
  }
`;

export function Header() {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const handleOpenLoginForm = () => setOpenLoginForm(true);
  const handleCloseLoginForm = () => setOpenLoginForm(false);

  return (
    <StyledHeader>
      <PagePadding>
        <Flexbox wrap="wrap" justify="space-between">
          <PageTitle title="Projekt:&nbsp;Ekonomia" />
          <HeaderMenu
            openLoginForm={handleOpenLoginForm}
            isOpenLoginForm={openLoginForm}
          />
        </Flexbox>
      </PagePadding>
      {openLoginForm && <LoginForm closeLoginForm={handleCloseLoginForm} />}
    </StyledHeader>
  );
}
