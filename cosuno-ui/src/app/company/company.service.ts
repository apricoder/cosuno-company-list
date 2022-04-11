import { stringify } from 'query-string';
import { fetchJson } from '../utils/fetch';
import { Company, SearchCompaniesParams } from './company.types';
import { config } from '../app.config';

export const searchCompanies = async (searchParams: SearchCompaniesParams): Promise<Company[]> => {
  try {
    const queryParams = stringify(searchParams);
    return await fetchJson<Company[]>(`${config.apiUrl}/companies?${queryParams}`, {});
  } catch (e: any) {
    throw new Error(`Can't search companies: ${e.message}`);
  }
};
