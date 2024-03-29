import { TableHeaderCell, TableRow } from '@sebek78-nx/ui';
import { TableHeaderData } from '@sebek78-nx/types';

export interface TableHeaderProps<T> {
  header: TableHeaderData<T>[];
}

export function TableHeader<T>({ header }: TableHeaderProps<T>) {
  // TODO: add units row
  return (
    <thead>
      <TableRow key="labels">
        {header.map((th: TableHeaderData<T>) => (
          <TableHeaderCell
            key={th.label}
            data={th.label}
            rowSpan={th.unit ? 1 : 2}
          />
        ))}
      </TableRow>
      <TableRow key="units">
        {header.map(
          (th: TableHeaderData<T>) =>
            th.unit && <TableHeaderCell key={th.label} data={th.unit} />
        )}
      </TableRow>
    </thead>
  );
}
