import styled from 'styled-components';
import { MenuLink } from '../menu-link/menu-link';

export interface MenuItemProps {
  to: string;
  label: string;
}

const StyledMenuItem = styled.li`
  background-color: ${({ theme }) => theme.palette.background.default};
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.inset};
  }
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export function MenuItem({ to, label }: MenuItemProps) {
  return (
    <StyledMenuItem>
      <MenuLink to={to}>{label}</MenuLink>
    </StyledMenuItem>
  );
}
