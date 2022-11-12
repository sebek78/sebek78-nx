import { Company } from '@prisma/client';

export interface TableHeaderData<T> {
  name: keyof T;
  label: string;
}

export type ModifiedCompany = Company & {
  // INFO: Prisma return ISO datetime string rather than JS Date object
  // https://github.com/prisma/prisma/discussions/5522
  updatedDate: Date;
};
