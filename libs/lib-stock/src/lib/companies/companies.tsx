import { useCompanies } from '@sebek78-nx/data-access';
import { Menu } from '../menu/menu';
import { ErrorInfo, Flexbox, Loader, Page, Table } from '@sebek78-nx/ui';
import { companyHeader } from './constatnts';

export function Companies() {
  const { data: companies, isLoading, isError, error } = useCompanies();

  return (
    <Page>
      <Menu />
      <Flexbox direction="column">
        {isLoading && <Loader />}
        {isError && <ErrorInfo error={error} />}
        <Table header={companyHeader} data={companies} />
      </Flexbox>
    </Page>
  );
}
