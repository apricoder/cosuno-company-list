import { CompanyState } from './company.reducer';

export const getDisplayCompanies = (state: CompanyState) => {
  return state.list.value;
};
