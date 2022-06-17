import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MainPageProps {}

const StyledMainPage = styled.div`
  color: pink;
`;

export function MainPage(props: MainPageProps) {
  return (
    <StyledMainPage>
      <h1>Welcome to MainPage!</h1>
    </StyledMainPage>
  );
}
