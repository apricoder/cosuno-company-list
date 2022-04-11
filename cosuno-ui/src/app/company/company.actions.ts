import { createAction } from 'typesafe-actions';
import { Company, SearchCompaniesParams } from './company.types';

export const searchCompaniesRequest = createAction(`[Company] Get companies request`)<SearchCompaniesParams>();
export const getCompaniesError = createAction(`[Company] Get companies error`)<{ error: Error }>();
export const getCompaniesSuccess = createAction(`[Company] Get companies success`)<{ companies: Company[] }>();

export const changeCompanySearchParamsAction = createAction(`[Company] Change company search params`)<SearchCompaniesParams>();
