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
    name: 'date',
    label: 'Aktualizacja',
  },
  {
    name: 'quarter',
    label: 'Kwartał',
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
    unit: '%',
  },
  {
    name: 'roa',
    label: 'ROA',
    unit: '%',
  },
  {
    name: 'roe',
    label: 'ROE',
    unit: '%',
  },
  {
    name: 'zScore',
    label: 'Z Score',
  },
  {
    name: 'nextUpdate',
    label: 'Następny raport',
  },
];
