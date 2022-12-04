import styled from 'styled-components';
import { MenuItemType, UserRole } from '@sebek78-nx/types';
import { Flexbox, MenuLink, Submenu } from '@sebek78-nx/ui';
import { STORAGE_KEY } from '@sebek78-nx/util';
import { useEffect, useState } from 'react';

const StyledMenu = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 ${(props) => props.theme.spacing(4)};
  border-bottom: 2px solid ${(props) => props.theme.palette.border.default};
  background-color: ${(props) => props.theme.palette.background.default};
`;

const companyMenu: MenuItemType[] = [
  {
    to: '/',
    label: 'Panel',
  },
  {
    to: '/companies',
    label: 'Spółki',
  },
  {
    to: '/abc',
    label: 'Dodaj spółkę',
    adminOnly: true,
  },
];

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
      <Flexbox justify="flex-start">
        <MenuLink to="/">Strona główna</MenuLink>
        <Submenu label="Spółki" role={role} menuItems={companyMenu} />
      </Flexbox>
    </StyledMenu>
  );
}
