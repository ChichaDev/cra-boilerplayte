import { ProfileCard } from '@/components/profile/ProfileCard';
import { useAppDispatch } from '@/store/redux-hook';
import { setLoggedInStatusThunk } from '@/store/auth/actions';
import { Container } from '@mui/system';

import { profileStyles } from './pageStyles';

export const Profile = () => {
  const dispatch = useAppDispatch();

  const handleExitUser = () => {
    dispatch(setLoggedInStatusThunk(false));
  };

  return (
    <Container sx={profileStyles}>
      <ProfileCard handleExitUser={handleExitUser} />
    </Container>
  );
};
