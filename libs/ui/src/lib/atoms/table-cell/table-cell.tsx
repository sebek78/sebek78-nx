import { ThemeTextColorKeys } from '@sebek78-nx/types';
import styled from 'styled-components';

export interface TableCellProps {
  data: string | number;
  color?: ThemeTextColorKeys;
  bold?: boolean;
}

const StyledTableCell = styled.td<{
  color?: ThemeTextColorKeys;
  bold: boolean;
}>`
  color: ${({ theme, color }) =>
    color ? theme.palette.text[color] : theme.palette.text.default};
  background-color: inherit;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  text-align: center;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export function TableCell({ data, color, bold = false }: TableCellProps) {
  return (
    <StyledTableCell color={color} bold={bold}>
      {data}
    </StyledTableCell>
  );
}
