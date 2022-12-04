import { MenuItemType, UserRole } from '@sebek78-nx/types';
import { MenuItem } from '@sebek78-nx/ui';
import styled from 'styled-components';

export interface SubmenuListProps {
  menuItems: MenuItemType[];
  role: UserRole | null;
}

const StyledSubmenuList = styled.div`
  position: relative;
  top: -1px;
  list-style-type: none;
`;

const isMenuItemVisible = (to: string) => document.location.pathname !== to;

export function SubmenuList({ menuItems, role }: SubmenuListProps) {
  return (
    <StyledSubmenuList>
      {menuItems.map(({ to, label, adminOnly }) => {
        if (!isMenuItemVisible(to)) return null;

        if (adminOnly) {
          if (role && role !== 'ADMIN') return null;

          return <MenuItem key={to} to={to} label={label} />;
        } else {
          return <MenuItem key={to} to={to} label={label} />;
        }
      })}
    </StyledSubmenuList>
  );
}
