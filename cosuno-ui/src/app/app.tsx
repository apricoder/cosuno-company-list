import React from 'react';
import './app.scss';
import { store } from './app.store';
import AppRouter from './app.router';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
