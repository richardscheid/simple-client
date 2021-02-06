import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '@pages';
import { Layout } from '../../layout';

const PrivateRoutes = () => (
  <Switch>
    <Layout>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Layout>
  </Switch>
);

export { PrivateRoutes };
