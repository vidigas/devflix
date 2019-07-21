import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './modules/Main';
import Article from './modules/Article';

const history = createBrowserHistory();
history.listen(() => {});
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={() => <Main />} />
      <Route path='/articles/:ArticleId' component={() => <Article />} />
    </Switch>
  </Router>
);

export default AppRouter;
