import styled from 'styled-components';
import { Button } from '../atoms/button/button';
import { Flexbox } from '../atoms/flexbox/flexbox';

const StyledHeaderMenu = styled.div`
  width: 100%;
  height: 60px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: max-content;
  }
`;

export function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <Flexbox>
        <Button label="Rejestracja" onClick={() => undefined} />
        <Button label="Logowanie" onClick={() => undefined} />
      </Flexbox>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
