import { useCompanies } from '@sebek78-nx/data-access';
import { Flexbox } from '@sebek78-nx/ui';
import { Menu } from '../menu/menu';
import { Page, TableCell } from '@sebek78-nx/ui';

export function Companies() {
  const { data: companies, isLoading, isError, error } = useCompanies();

  console.log(companies);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  // TODO: table components

  return (
    <Page>
      <Menu />
      <Flexbox>
        <table>
          {companies?.map((company) => (
            <tr key={company.id}>
              <TableCell data={company.name} />
              <TableCell data={company.marketValue} />
              <TableCell
                data={company.treasury}
                color={company.treasury > 0 ? 'danger' : undefined}
              />
              <TableCell
                data={new Date(company.updated).toLocaleDateString('pl')}
              />
            </tr>
          ))}
        </table>
      </Flexbox>
    </Page>
  );
}
