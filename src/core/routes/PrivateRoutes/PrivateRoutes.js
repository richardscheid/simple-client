import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../../pages';

const PrivateRoutes = () => (
  <Switch>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>
);

export { PrivateRoutes };
