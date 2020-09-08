import React from 'react';
import { useSelector } from 'react-redux';
import { PublicRoutes } from '../PublicRoutes';
import { PrivateRoutes } from '../PrivateRoutes';

const Routes = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return <>{authenticated ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export { Routes };
