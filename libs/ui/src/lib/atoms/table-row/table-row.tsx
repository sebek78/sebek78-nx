import { ReactNode } from 'react';
import styled from 'styled-components';

export interface TableRowProps {
  children: ReactNode;
}

const StyledTableRow = styled.tr`
  background-color: ${({ theme }) => theme.palette.background.subtle};
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.inset};
  }
`;

export function TableRow({ children }: TableRowProps) {
  return <StyledTableRow>{children}</StyledTableRow>;
}
