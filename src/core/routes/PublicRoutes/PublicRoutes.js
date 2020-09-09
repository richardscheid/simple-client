import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../../../pages';

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
  </Switch>
);

export { PublicRoutes };
