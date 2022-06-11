import styled from 'styled-components';
import { Flexbox } from '../atoms/flexbox/flexbox';

/* eslint-disable-next-line */
export interface HeaderMenuProps {}

const StyledHeaderMenu = styled.div`
  width: 100%;
  height: 28px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: max-content;
  }
`;

export function HeaderMenu(props: HeaderMenuProps) {
  return (
    <StyledHeaderMenu>
      <Flexbox>
        <button>Rejestracja</button>
        <button>Logowanie</button>
      </Flexbox>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
