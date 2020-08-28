import React from 'react';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from '../PrivateRoutes';
import { PublicRoutes } from '../PublicRoutes';

const Routes = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return <>{!!authenticated ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export { Routes };
