import { ThemeTextColorKeys } from '@sebek78-nx/types';
import styled from 'styled-components';

export interface TableCellProps {
  data: string | number;
  color?: ThemeTextColorKeys;
}

const StyledTableCell = styled.td<{ color?: ThemeTextColorKeys }>`
  color: ${({ theme, color }) =>
    color ? theme.palette.text[color] : theme.palette.text.default};
  background-color: ${({ theme }) => theme.palette.background.subtle};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  text-align: center;
`;

export function TableCell({ data, color }: TableCellProps) {
  return <StyledTableCell color={color}>{data}</StyledTableCell>;
}
