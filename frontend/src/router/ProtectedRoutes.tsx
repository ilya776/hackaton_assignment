import { type FC } from 'react';
import {
  Navigate,
  Outlet
} from 'react-router';
import { ROUTES_NAMES } from './routesNames';

const ProtectedRoutes: FC = () => {
  const auth = true; //check auth

  return auth ? <Outlet /> : <Navigate to={ROUTES_NAMES.Auth} />;
};

export { ProtectedRoutes };
