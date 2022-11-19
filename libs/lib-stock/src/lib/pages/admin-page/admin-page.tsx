import { memo } from 'react';
import styled from 'styled-components';

const StyledAdminPage = styled.div`
  color: red;
`;

export const AdminPage = memo(function AdminPage() {
  return (
    <StyledAdminPage>
      <h1>Welcome to AdminPage!</h1>
    </StyledAdminPage>
  );
});
