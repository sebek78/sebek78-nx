import styled from 'styled-components';
import Header from '../header/header';
import Homepage from '../homepage/homepage';

/* eslint-disable-next-line */
export interface AppRootProps {}

const StyledAppRoot = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
`;

export function AppRoot(props: AppRootProps) {
  return (
    <StyledAppRoot>
      <Header />
      <Homepage />
    </StyledAppRoot>
  );
}

export default AppRoot;
