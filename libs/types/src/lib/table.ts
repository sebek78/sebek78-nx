import { Company } from '@prisma/client';
import { ThemeTextColorKeys } from './theme';

export interface TableHeaderData<T> {
  name: keyof T;
  label: string;
  unit?: string;
  colorFormatter?: ColorFormatter;
}

export type ModifiedCompany = Company & {
  // INFO: Prisma return ISO datetime string rather than JS Date object
  // https://github.com/prisma/prisma/discussions/5522
  updatedDate: Date;
};

export type ColorFormatter = <T>(value: T[keyof T]) => ThemeTextColorKeys;
