import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../../../pages';

const PrivateRoutes = (props) => (
  <Switch>
    <Route path='/'>
      <HomePage />
    </Route>
  </Switch>
);

export { PrivateRoutes };
