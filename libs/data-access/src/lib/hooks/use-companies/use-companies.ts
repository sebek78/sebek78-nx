import { Company } from '@prisma/client';
import { ModifiedCompany } from '@sebek78-nx/types';
import { AxiosError } from 'axios';
import { useApiQuery } from '../use-api-query/use-api-query';

export interface UseCompanies {
  data: ModifiedCompany[] | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

function sortByMarketValueDesc(a: Company, b: Company) {
  return b.marketValue - a.marketValue;
}

/* Company type needs to be extended because Prisma returns ISOstring
for "updated" key instead of Date */
function modifyCompany(company: Company): ModifiedCompany {
  return {
    ...company,
    updatedDate: new Date(company.updated.toString()),
  };
}

export function useCompanies(): UseCompanies {
  const { data, error, isError, isLoading, isSuccess } = useApiQuery<Company[]>(
    'companiesData',
    '/companies'
  );

  return {
    data: data?.sort(sortByMarketValueDesc).map(modifyCompany),
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
