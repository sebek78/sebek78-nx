import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CompaniesProps {}

const StyledCompanies = styled.div`
  color: pink;
`;

export function Companies(props: CompaniesProps) {
  return (
    <StyledCompanies>
      <h1>Spółki</h1>
    </StyledCompanies>
  );
}
