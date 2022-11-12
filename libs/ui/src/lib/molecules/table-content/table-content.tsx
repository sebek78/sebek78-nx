import { TableHeaderData } from '@sebek78-nx/types';
import { TableCell, TableRow } from '@sebek78-nx/ui';
import { cellFormatter } from 'libs/lib-stock/src/lib/companies/constatnts';

export interface TableContentProps<T> {
  data?: T[];
  header: TableHeaderData<T>[];
}

export function TableContent<T>({ data, header }: TableContentProps<T>) {
  return (
    <tbody>
      {data?.map((data) => (
        <TableRow>
          {header.map((headerData) => (
            <TableCell data={cellFormatter(data[headerData.name])} />
          ))}
        </TableRow>
      ))}
    </tbody>
  );
}
