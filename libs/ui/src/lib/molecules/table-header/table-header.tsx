import { TableHeaderCell, TableRow } from '@sebek78-nx/ui';
import { TableHeaderData } from '@sebek78-nx/types';

export interface TableHeaderProps {
  headerData: TableHeaderData[];
}

export function TableHeader({ headerData }: TableHeaderProps) {
  return (
    <TableRow>
      {headerData.map((th: TableHeaderData) => (
        <TableHeaderCell key={th.name} data={th.label} />
      ))}
    </TableRow>
  );
}
