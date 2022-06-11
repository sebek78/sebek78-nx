import styled from 'styled-components';
import { PageTitle, Tagline } from '@sebek78-nx/ui';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.border.default};
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <PageTitle title="Projekt: Ekonomia" />
      <Tagline text="Część tego, co zarabiasz, powinieneś zatrzymać dla siebie." />
    </StyledHeader>
  );
}

export default Header;
