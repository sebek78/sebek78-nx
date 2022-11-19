import { TableHeaderData } from '@sebek78-nx/types';
import { TableCell, TableRow } from '@sebek78-nx/ui';
import { valueFormatter } from '@sebek78-nx/util';

export interface TableContentProps<T> {
  data?: T[];
  header: TableHeaderData<T>[];
}

export function TableContent<T>({ data, header }: TableContentProps<T>) {
  return (
    <tbody>
      {data?.map((data, idx) => (
        <TableRow key={idx}>
          {header.map((headerData) => (
            <TableCell
              key={headerData.label}
              data={valueFormatter(data[headerData.name])}
              color={
                headerData?.colorFormatter &&
                headerData?.colorFormatter(data[headerData.name])
              }
            />
          ))}
        </TableRow>
      ))}
    </tbody>
  );
}
