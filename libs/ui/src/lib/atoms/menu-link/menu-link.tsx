import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface MenuLinkProps {
  children: ReactNode;
  to: string;
}

const StyledMenuLink = styled(Link)`
  & {
    color: ${(props) => props.theme.palette.text.accent};
    text-decoration: none;
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;

export function MenuLink({ children, to }: MenuLinkProps) {
  return <StyledMenuLink to={to}>{children}</StyledMenuLink>;
}
