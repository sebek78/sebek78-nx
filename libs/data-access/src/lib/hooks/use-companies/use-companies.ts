import { Company, Report } from '@prisma/client';
import { ModifiedCompany, ModifiedReport } from '@sebek78-nx/types';
import { AxiosError } from 'axios';
import { useApiQuery } from '../use-api-query/use-api-query';

export interface UseCompanies {
  data: any[] | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

// TODO: arguments: CompanyAndReport type
function sortByMarketValueDesc(a: any, b: any) {
  return b.marketValue - a.marketValue;
}

// function modifyReport(report: ModifiedReport): Report {
//   return {
//     ...report,
//     sharesAmount: BigInt(report.sharesAmount),
//   };
// }

// TODO: return CompanyAndReport type
function mergeData(companies?: Company[], reports?: ModifiedReport[]) {
  if (!companies || !reports) return [];

  return companies
    .map((company) => {
      const report = reports.find((report) => report.companyId === company.id);

      return {
        ...company,
        /* Prisma returns ISOstring for "updated" key instead of Date */
        updatedDate: new Date(company.updated.toString()),
        marketValue: report?.marketValue || -1,
        ...report,
      };
    })
    .sort(sortByMarketValueDesc);
  // .map(modifyCompany);
}

export function useCompanies(): UseCompanies {
  const { data, error, isError, isLoading, isSuccess } = useApiQuery<any>(
    'companiesData',
    '/companies'
  );

  return {
    data: mergeData(data?.companies, data?.reports),
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
