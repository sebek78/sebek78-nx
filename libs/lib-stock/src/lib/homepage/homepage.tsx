import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomepageProps {}

const StyledHomepage = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
`;

export function Homepage(props: HomepageProps) {
  return (
    <StyledHomepage>
      <div>Welcome to Homepage!</div>
    </StyledHomepage>
  );
}

export default Homepage;
