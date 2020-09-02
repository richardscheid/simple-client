import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../../../pages';

const PublicRoutes = () => (
  <Switch>
    <Route path='/'>
      <Login />
    </Route>
  </Switch>
);

export { PublicRoutes };
