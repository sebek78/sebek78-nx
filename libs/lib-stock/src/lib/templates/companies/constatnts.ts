import { TableHeaderData, CompanyAndReport } from '@sebek78-nx/types';
import {
  colorFormatterTh,
  colorFormatterPE,
  colorFormatterThSuccess,
  boldFormatter,
  colorFormatterZS,
  valueFormatterZS,
} from '@sebek78-nx/util';

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
    colorFormatter: colorFormatterTh,
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
    colorFormatter: colorFormatterPE,
    boldFormatter: (value) => boldFormatter(value, 5, 20),
  },
  {
    name: 'ros',
    label: 'ROS',
    unit: '%',
    colorFormatter: (value) => colorFormatterThSuccess(value, 15),
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
    bold: true,
  },
  {
    name: 'zScore',
    label: 'Z Score',
    colorFormatter: colorFormatterZS,
    customFormatter: valueFormatterZS,
  },
  {
    name: 'nextUpdate',
    label: 'Następny raport',
  },
];
