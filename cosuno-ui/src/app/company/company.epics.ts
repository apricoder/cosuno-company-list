import { combineEpics, Epic, StateObservable } from 'redux-observable';
import { Dependencies, AppState, history } from '../app.store';
import { filter, switchMap, map, catchError, tap, ignoreElements } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, Observable, of } from 'rxjs';
import { changeCompanySearchParamsAction, searchCompaniesRequest, getCompaniesSuccess, getCompaniesError } from './company.actions';
import { CompanyAction, Company } from './company.types';
import { RouterPath } from '../router/router.path';
import { parse, stringify } from 'query-string';
import * as _ from 'lodash';

const getCompaniesEpic: Epic = (
  action$: Observable<CompanyAction>,
  state$: StateObservable<AppState>,
  { companyService }: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(searchCompaniesRequest)),
    switchMap((action) =>
      from(companyService.searchCompanies(action.payload))
        .pipe(
          map((companies: Company[]) => getCompaniesSuccess({ companies })),
          catchError((error: Error) => of(getCompaniesError({ error }))),
        ),
    ),
  );

const changeCompanySearchParamsEpic: Epic = (
  action$: Observable<CompanyAction>,
) =>
  action$.pipe(
    filter(isActionOf(changeCompanySearchParamsAction)),
    tap(action => {
      const currentSearch = parse(window.location.search);
      if (!_.isEqual(action.payload.q, currentSearch.q)) {
        history.push(`${RouterPath.Companies}?${stringify({ ...currentSearch, ...action.payload })}`);
      }
    }),
    ignoreElements(),
  );

export const companyEpics = combineEpics(
  getCompaniesEpic,
  changeCompanySearchParamsEpic
);
