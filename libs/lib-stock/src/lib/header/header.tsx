import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <div>Welcome to Header!</div>
    </StyledHeader>
  );
}

export default Header;
