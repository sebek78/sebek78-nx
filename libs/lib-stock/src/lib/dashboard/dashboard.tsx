import styled from 'styled-components';
import { Menu } from '../menu/menu';

/* eslint-disable-next-line */
export interface DashboardProps {}

const StyledDashboard = styled.div`
  color: pink;
`;

export function Dashboard(props: DashboardProps) {
  return (
    <StyledDashboard>
      <Menu />
      Strona główna
    </StyledDashboard>
  );
}
