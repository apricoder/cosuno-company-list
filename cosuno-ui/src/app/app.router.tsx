import * as React from 'react';
import { RouterPath } from './router/router.path';
import { Navigate, Route, Routes } from 'react-router-dom';
import { withHomeLayout } from './common/layouts/home.layout';
import { CompanyPageConnected } from './company/pages/company.page.connected';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from './app.store';

const AppRouter: React.FC = () => {

  return (
    <Router history={history}>
      <Routes>

        <Route
          path={RouterPath.Companies}
          element={
            withHomeLayout(
              <CompanyPageConnected />
            )
          }
        />

        <Route
          path="*"
          element={<Navigate to={RouterPath.Companies} replace />}
        />

      </Routes>

    </Router>
  );
};

export default AppRouter;
