import styled from 'styled-components';
import { UserRole } from '@sebek78-nx/types';
import { Flexbox, MenuLink, Submenu, StyledMenu } from '@sebek78-nx/ui';
import { STORAGE_KEY } from '@sebek78-nx/util';
import { useEffect, useState } from 'react';
import { companyMenu } from './conpany-menu';

export function Menu() {
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    if (!role) {
      const userData = localStorage.getItem(STORAGE_KEY);
      if (userData) {
        setRole(JSON.parse(userData).role);
      }
    }
  }, [role]);

  return (
    <StyledMenu>
      <Flexbox justify="flex-start" align="flex-start">
        <MenuLink to="/">Strona główna</MenuLink>
        <Submenu label="Spółki" role={role} menuItems={companyMenu} />
      </Flexbox>
    </StyledMenu>
  );
}
