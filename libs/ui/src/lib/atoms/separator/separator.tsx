import styled from 'styled-components';

const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  background-color: ${({ theme }) => theme.palette.background.subtle};
  border: 1px solid ${({ theme }) => theme.palette.border.default};
`;

export function Separator() {
  return <StyledSeparator />;
}
