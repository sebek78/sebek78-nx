import { ReactNode } from 'react';
import styled from 'styled-components';
import { TableHeader } from '@sebek78-nx/ui';
import { TableHeaderData } from '@sebek78-nx/types';

export interface TableProps {
  children: ReactNode;
  headerData: TableHeaderData[];
}

const StyledTable = styled.table`
  margin-top: 32px;
`;

// TODO: move table to ui/organisms

export function Table({ children, headerData }: TableProps) {
  return (
    <StyledTable>
      <thead>
        <TableHeader headerData={headerData} />
      </thead>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}
