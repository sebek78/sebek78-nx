import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DashboardProps {}

const StyledDashboard = styled.div`
  color: pink;
`;

export function Dashboard(props: DashboardProps) {
  return <StyledDashboard>Strona główna</StyledDashboard>;
}
