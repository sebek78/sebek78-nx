import styled from 'styled-components';
import { Menu } from '../../menu/menu';

/* eslint-disable-next-line */
export interface AdminDashboardProps {}

const StyledAdminDashboard = styled.div`
  color: pink;
`;

export function AdminDashboard(props: AdminDashboardProps) {
  return (
    <StyledAdminDashboard>
      <Menu />
      <div>Dashboard</div>
    </StyledAdminDashboard>
  );
}
