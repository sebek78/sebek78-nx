import styled from 'styled-components';

export interface TableHeaderCellProps {
  data?: string;
  rowSpan?: number;
}

const StyledTableHeaderCell = styled.th`
  color: ${({ theme }) => theme.palette.text.default};
  background-color: ${({ theme }) => theme.palette.background.subtle};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  text-align: center;
`;

export function TableHeaderCell({
  data = '',
  rowSpan = 1,
}: TableHeaderCellProps) {
  return (
    <StyledTableHeaderCell rowSpan={rowSpan}>{data}</StyledTableHeaderCell>
  );
}
