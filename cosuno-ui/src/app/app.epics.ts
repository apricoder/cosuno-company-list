import { combineEpics } from 'redux-observable';
import { companyEpics } from './company/company.epics';

export const appEpics = combineEpics(
  companyEpics,
);
