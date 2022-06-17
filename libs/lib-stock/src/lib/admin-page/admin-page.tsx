import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AdminPageProps {}

const StyledAdminPage = styled.div`
  color: pink;
`;

export function AdminPage(props: AdminPageProps) {
  return (
    <StyledAdminPage>
      <h1>Welcome to AdminPage!</h1>
    </StyledAdminPage>
  );
}
