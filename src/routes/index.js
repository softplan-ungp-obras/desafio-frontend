import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Dashboard } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
