import { type FC } from 'react';
import {
  Navigate,
  Outlet
} from 'react-router';
import { APP_ROUTES_NAMES } from './AppRouterNames';

const ProtectedRoutes: FC = () => {
  const auth = localStorage.getItem('accessToken');

  return auth ? <Outlet /> : <Navigate to={APP_ROUTES_NAMES.Auth} />;
};

export { ProtectedRoutes };
