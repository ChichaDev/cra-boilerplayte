import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedInStatus } from '@/store/auth/selector';
import { useAppSelector } from '@/store/redux-hook';

type ProtectedRouteProps = {
  redirectPath: string;
  children: JSX.Element;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { redirectPath, children } = props;

  const isLoggedIn = useAppSelector(getIsLoggedInStatus);

  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  return children;
};
