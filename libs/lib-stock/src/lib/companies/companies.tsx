import { useCompanies } from '@sebek78-nx/data-access';
import { Menu } from '../menu/menu';
import {
  ErrorInfo,
  Flexbox,
  Loader,
  Page,
  TableCell,
  TableRow,
  Table,
} from '@sebek78-nx/ui';
import { companyHeader } from './constatnts';

export function Companies() {
  const { data: companies, isLoading, isError, error } = useCompanies();

  console.log(companies);

  return (
    <Page>
      <Menu />
      <Flexbox direction="column">
        {isLoading && <Loader />}
        {isError && <ErrorInfo error={error} />}
        <Table headerData={companyHeader}>
          {companies?.map((company) => (
            <TableRow key={company.id}>
              <TableCell data={company.name} />
              <TableCell data={company.marketValue} />
              <TableCell
                data={company.treasury}
                color={company.treasury > 0 ? 'danger' : undefined}
              />
              <TableCell
                data={new Date(company.updated).toLocaleDateString('pl')}
              />
            </TableRow>
          ))}
        </Table>
      </Flexbox>
    </Page>
  );
}
