import React from 'react';
import { useSelector } from 'react-redux';
import { PublicRoutes } from '../PublicRoutes';
import { PrivateRoutes } from '../PrivateRoutes';

const Routes = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  console.log(authenticated);
  console.log(!!authenticated ? 'Private' : 'Public');

  return <>{!!authenticated ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export { Routes };
