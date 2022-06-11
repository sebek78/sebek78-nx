import styled from 'styled-components';
import { Button } from '../atoms/button/button';
import { Flexbox } from '../atoms/flexbox/flexbox';

interface HeaderMenuProps {
  openLoginForm: () => void;
  isOpenLoginForm: boolean;
}

const StyledHeaderMenu = styled.div`
  width: 100%;
  height: 60px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: max-content;
  }
`;

export function HeaderMenu({
  openLoginForm,
  isOpenLoginForm,
}: HeaderMenuProps) {
  return (
    <StyledHeaderMenu>
      {!isOpenLoginForm && (
        <Flexbox>
          <Button label="Rejestracja" onClick={() => undefined} />
          <Button label="Logowanie" onClick={openLoginForm} />
        </Flexbox>
      )}
    </StyledHeaderMenu>
  );
}
