import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomepageProps {}

const StyledHomepage = styled.div`
  color: pink;
`;

export function Homepage(props: HomepageProps) {
  return (
    <StyledHomepage>
      <h1>Welcome to Homepage!</h1>
    </StyledHomepage>
  );
}

export default Homepage;
