import { Company } from '@prisma/client';
import { AxiosError } from 'axios';
import { useApiQuery } from '../use-api-query/use-api-query';

export interface UseCompanies {
  data: Company[] | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

function sortByMarketValueDesc(a: Company, b: Company) {
  return b.marketValue - a.marketValue;
}

export function useCompanies(): UseCompanies {
  const { data, error, isError, isLoading, isSuccess } = useApiQuery<Company[]>(
    'companiesData',
    '/companies'
  );

  return {
    data: data?.sort(sortByMarketValueDesc),
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
