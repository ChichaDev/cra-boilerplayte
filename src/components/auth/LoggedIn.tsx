import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import { IconButton, Tooltip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { accountCircleIcon, authBox } from './authStyles';

export const LoggedIn = () => {
  const { t } = useTranslation();

  return (
    <Box sx={authBox}>
      <Tooltip title={t('tooltipLogIn')}>
        <IconButton>
          <Link to="/profile">
            <AccountCircleIcon sx={accountCircleIcon} />
          </Link>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
