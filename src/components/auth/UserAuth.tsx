import { getIsLoggedInStatus } from '@/store/auth/selector';
import { useAppSelector } from '@/store/redux-hook';

import { LoggedIn } from './LoggedIn';
import { LoggedOut } from './LoggedOut';

export const UserAuth = () => {
  const isLoggedIn = useAppSelector(getIsLoggedInStatus);

  if (isLoggedIn) {
    return <LoggedIn />;
  }

  return <LoggedOut />;
};
