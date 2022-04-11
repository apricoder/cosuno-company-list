import { parse } from 'query-string';
import { AppState } from '../app.store';
import { Location } from 'history';
import { createSelector } from 'reselect';

export const getLocation = (state: AppState): Location => state.router.location!;

export const getQueryParams = createSelector(getLocation, location => parse(location.search));

