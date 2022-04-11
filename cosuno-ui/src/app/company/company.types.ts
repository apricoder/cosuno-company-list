import * as actions from './company.actions';
import { ActionType } from 'typesafe-actions';

export type CompanyAction = ActionType<typeof actions>;

export type Company = {
  id: number;
  name: string;
  logoUrl: string;
  specialtyId: number;
  city: string;
}

export type UiCompany = Company & {
  specialty: string;
}

export type SearchCompaniesParams = {
  q?: string,
  specialty?: number[]
};


