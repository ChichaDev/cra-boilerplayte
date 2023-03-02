import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Typography } from '@mui/material';

import { feedOutlinedIcon, informLogo } from '../headerStyles';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <>
      <FeedOutlinedIcon sx={feedOutlinedIcon} />
      <Typography variant="h6" noWrap sx={informLogo}>
        <Link style={linkStyle} to="/main">
          {t('inform')}
        </Link>
      </Typography>
    </>
  );
};
