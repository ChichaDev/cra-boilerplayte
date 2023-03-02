import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { cardActions, cardContent, profileCard, roles } from './profileStyles';
import { CustomBtn } from '../ui/CustomBtn';

type ProfileCardProps = {
  handleExitUser: () => void;
};

export const ProfileCard = (props: ProfileCardProps) => {
  const { handleExitUser } = props;

  const { t } = useTranslation();

  return (
    <Card sx={profileCard}>
      <CardContent>
        <Typography sx={cardContent} color="text.secondary" gutterBottom>
          {t('profile')}
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem={true}
          color="gray"
          variant="fullWidth"
        />
        <Typography variant="h5" component="div">
          Mike
        </Typography>
        <Typography sx={roles} color="text.secondary">
          roles: admin
        </Typography>
        <Typography variant="body2">@email: mikeadmin@gmail.com</Typography>
        <Typography variant="body2">country: USA</Typography>
        <Typography variant="body2">twitter: @mikerules</Typography>
      </CardContent>
      <CardActions sx={cardActions}>
        <CustomBtn onClick={handleExitUser}>{t('exitProfile')}</CustomBtn>
      </CardActions>
    </Card>
  );
};
