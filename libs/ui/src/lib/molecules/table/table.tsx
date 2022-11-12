import styled from 'styled-components';
import { TableContent, TableHeader } from '@sebek78-nx/ui';
import { TableHeaderData } from '@sebek78-nx/types';

export interface TableProps<T> {
  data?: T[];
  header: TableHeaderData<T>[];
}

const StyledTable = styled.table`
  margin-top: 32px;
`;

// TODO: move table to ui/organisms

export function Table<T>({ data, header }: TableProps<T>) {
  return (
    <StyledTable>
      <TableHeader header={header} />
      <TableContent data={data} header={header} />
    </StyledTable>
  );
}
