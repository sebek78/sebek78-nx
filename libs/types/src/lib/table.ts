import { Company, Report } from '@prisma/client';
import { ThemeTextColorKeys } from './theme';

export type ColorFormatter = <T>(value: T[keyof T]) => ThemeTextColorKeys;
export type BoldFormatter = <T>(
  value: T[keyof T],
  min?: number,
  max?: number
) => boolean;
export type DataFormatter = <T>(value: T[keyof T]) => string;

export interface TableHeaderData<T> {
  name: keyof T;
  label: string;
  unit?: string;
  bold?: boolean;
  colorFormatter?: ColorFormatter;
  boldFormatter?: BoldFormatter;
  customFormatter?: DataFormatter;
}

export type ModifiedCompany = Company & {
  // INFO: Prisma return ISO datetime string rather than JS Date object
  // https://github.com/prisma/prisma/discussions/5522
  updatedDate: Date;
};

export type CompanyAndReport = ModifiedCompany & {
  group: number;
  marketValue: number;
  date: Date;
  quarter?: string;
  pb?: number;
  pe?: number;
  ros?: number;
  roa?: number;
  roe?: number;
  zScore?: number;
  nextUpdate?: Date;
};

export type ModifiedReport = Report & {
  sharesAmount: string;
};
