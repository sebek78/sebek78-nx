import { TableHeaderData, CompanyAndReport } from '@sebek78-nx/types';
import { colorFormatter } from '@sebek78-nx/util';

export const companyHeader: TableHeaderData<CompanyAndReport>[] = [
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
  {
    name: 'year',
    label: 'Rok',
  },
  {
    name: 'quarter',
    label: 'Kwartał',
  },
  {
    name: 'date',
    label: 'Data raportu',
  },
  {
    name: 'pb',
    label: 'C/WK',
  },
  {
    name: 'pe',
    label: 'C/Z',
  },
  {
    name: 'ros',
    label: 'ROS',
  },
  {
    name: 'roa',
    label: 'ROA',
  },
  {
    name: 'roe',
    label: 'ROE',
  },
  {
    name: 'z_score',
    label: 'Z Score',
  },
  {
    name: 'nextUpdate',
    label: 'Następny raport',
  },
];
