import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AppAction } from './app.actions';
import { appEpics } from './app.epics';
import { companyService } from './company';
import { createReduxHistoryContext, RouterState } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { companyReducer, CompanyState } from './company/company.reducer';

const dependencies = {
  companyService,
};

export type Dependencies = typeof dependencies;

export type AppState = {
  router: RouterState;
  company: CompanyState;
};

const epicMiddleware = createEpicMiddleware<AppAction, AppAction, AppState>({
  dependencies,
});

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = (window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  //other options if needed
});

export const store = createStore(
  combineReducers({
    router: routerReducer,
    company: companyReducer,
  }),

  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      routerMiddleware,
    ),
  ),
);

export const history = createReduxHistory(store);

epicMiddleware.run(appEpics);

