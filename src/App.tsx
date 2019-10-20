import React from 'react';
import { Router, Switch, Route } from 'react-router';
import MainPage from './components/pages/MainPage';
import { createBrowserHistory } from 'history';

const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route>Page not found</Route>
      </Switch>
    </Router>
  );
};

export default App;
