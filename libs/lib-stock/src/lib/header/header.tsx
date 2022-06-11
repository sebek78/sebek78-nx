import styled from 'styled-components';
import { Flexbox, HeaderMenu, PagePadding, PageTitle } from '@sebek78-nx/ui';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.background.overlay};
  height: 120px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 80px;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <PagePadding>
        <Flexbox wrap="wrap" justify="space-between">
          <PageTitle title="Projekt:&nbsp;Ekonomia" />
          <HeaderMenu />
        </Flexbox>
      </PagePadding>
    </StyledHeader>
  );
}
