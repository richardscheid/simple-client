import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>

        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
