import { UiCompany, CompanyAction } from './company.types';
import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';
import { searchCompaniesRequest, getCompaniesError, getCompaniesSuccess, changeCompanySearchParamsAction } from './company.actions';
import { specialtyMap } from '../specialty/specialty.types';

export type CompanyState = {
  list: {
    search: {
      q?: string
    };
    value: UiCompany[];
    error?: Error;
    isLoading: boolean;
  };
};

export const companyReducer = combineReducers<CompanyState, CompanyAction>({
  list: (state = { search: { q: `` }, value: [], isLoading: false }, action) => {
    switch (action.type) {
      case getType(searchCompaniesRequest):
        return {
          ...state,
          isLoading: true,
          error: undefined,
        };

      case getType(getCompaniesError):
        return {
          ...state,
          isLoading: false,
          error: action.payload.error
        };

      case getType(getCompaniesSuccess):
        return {
          ...state,
          isLoading: false,
          error: undefined,
          value: action.payload.companies
            .map(c => ({ ...c, specialty: specialtyMap[c.specialtyId]?.name }))
        };

      case getType(changeCompanySearchParamsAction):
        return {
          ...state,
          search: {
            ...state.search,
            q: action.payload.q
          },
        };

      default:
        return state;
    }
  }
});
