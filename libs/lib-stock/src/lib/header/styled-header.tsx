import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.background.subtle};
  height: 120px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 80px;
  }
`;
