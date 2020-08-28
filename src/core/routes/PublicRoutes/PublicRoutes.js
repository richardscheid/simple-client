import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, CallbackPage } from '../../../pages';

const PublicRoutes = () => (
  <Switch>
    <Route path='/callback'>
      <CallbackPage />
    </Route>
    <Route path='/'>
      <LoginPage />
    </Route>
  </Switch>
);

export { PublicRoutes };
