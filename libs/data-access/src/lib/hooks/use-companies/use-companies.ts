import { Company } from '@prisma/client';
import {
  CompanyAndReport,
  ModifiedCompany,
  ModifiedReport,
} from '@sebek78-nx/types';
import { AxiosError } from 'axios';
import { useApiQuery } from '../use-api-query/use-api-query';

export interface UseCompanies {
  data: CompanyAndReport[] | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

interface CompaniesDTO {
  companies: Company[];
  reports: ModifiedReport[];
}

function sortByMarketValueDesc(a: CompanyAndReport, b: CompanyAndReport) {
  return b.marketValue - a.marketValue;
}

function modifyCompany(company: Company): ModifiedCompany {
  return {
    ...company,
    /* Prisma returns ISOstring for "updated" key instead of Date */
    updatedDate: new Date(company.updated.toString()),
  };
}

function mergeData(companies?: Company[], reports?: ModifiedReport[]) {
  if (!companies || !reports) return [];

  const modifiedCompanies = companies.map(modifyCompany);

  const companiesAndLastReports = modifiedCompanies.map(
    (company: ModifiedCompany): CompanyAndReport => {
      const report = reports.find((report) => report.companyId === company.id);

      return {
        ...company,
        group: report ? report.group : -1,
        marketValue: report?.marketValue || company.marketValue,
        quarter: report ? `${report.year} Q${report.quarter}` : undefined,
        date: report ? new Date(report.date) : company.updatedDate,
        pb: report?.pb,
        pe: report?.pe,
        ros: report?.ros,
        roa: report?.roa,
        roe: report?.roe,
        zScore: report && report.zScore !== null ? report.zScore : undefined,
        nextUpdate:
          report && report.nextUpdate !== null
            ? new Date(report.nextUpdate)
            : undefined,
      };
    }
  );

  return companiesAndLastReports.sort(sortByMarketValueDesc);
}

export function useCompanies(): UseCompanies {
  const { data, error, isError, isLoading, isSuccess } =
    useApiQuery<CompaniesDTO>('companiesData', '/companies');

  return {
    data: mergeData(data?.companies, data?.reports),
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
