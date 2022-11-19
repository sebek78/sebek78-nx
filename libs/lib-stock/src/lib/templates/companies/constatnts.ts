import { ModifiedCompany, TableHeaderData } from '@sebek78-nx/types';
import { colorFormatter } from '@sebek78-nx/util';

export const companyHeader: TableHeaderData<ModifiedCompany>[] = [
  {
    name: 'name',
    label: 'Spółka',
  },
  {
    name: 'marketValue',
    label: 'Kapitalizacja',
    unit: 'mld PLN',
  },
  {
    name: 'treasury',
    label: 'Skarb',
    unit: '%',
    colorFormatter: colorFormatter,
  },
  {
    name: 'updatedDate',
    label: 'Aktualizacja',
  },
];
