import styled from 'styled-components';
import Header from '../header/header';
import Homepage from '../homepage/homepage';

/* eslint-disable-next-line */
export interface AppRootProps {}

const StyledAppRoot = styled.div`
  color: pink;
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
