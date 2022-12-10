import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface MenuLinkProps {
  children: ReactNode;
  to: string;
}

const StyledMenuLink = styled(Link)`
  & {
    height: 38px;
    color: ${(props) => props.theme.palette.text.accent};
    text-decoration: none;
    padding: 0 ${(props) => props.theme.spacing(1)};
  }
  &:hover {
    color: ${({ theme }) => theme.palette.text.accentEmphasis};
    background-color: ${({ theme }) => theme.palette.background.inset};
  }
`;

export function MenuLink({ children, to }: MenuLinkProps) {
  return <StyledMenuLink to={to}>{children}</StyledMenuLink>;
}
