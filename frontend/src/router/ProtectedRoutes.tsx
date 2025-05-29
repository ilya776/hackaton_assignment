import { type FC } from 'react';
import {
  Navigate,
  Outlet
} from 'react-router';
import { APP_ROUTES_NAMES } from './AppRouterNames';

const ProtectedRoutes: FC = () => {

  const isAuth = localStorage.getItem('accessToken')

  //rtk query logic for checking auth status

  return isAuth ? <Outlet /> : <Navigate to={APP_ROUTES_NAMES.Auth} />;
};

export { ProtectedRoutes };
