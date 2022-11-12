import { ModifiedCompany, TableHeaderData } from '@sebek78-nx/types';

// TODO: move to util library
export function cellFormatter<T>(value: T[keyof T]) {
  if (value instanceof Date) {
    return new Date(value).toLocaleDateString('pl');
  }
  if (typeof value === 'string') return String(value);
  if (typeof value === 'number') return Number(value);

  return '';
}

export const companyHeader: TableHeaderData<ModifiedCompany>[] = [
  {
    name: 'name',
    label: 'Spółka',
  },
  {
    name: 'marketValue',
    label: 'Kapitalizacja',
  },
  {
    name: 'treasury',
    label: 'Skarb',
  },
  {
    name: 'updatedDate',
    label: 'Aktualizacja',
  },
];
