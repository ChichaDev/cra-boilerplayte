import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useTranslation } from 'react-i18next';

import { errorLink, errorStyles, errorTypography } from './pageStyles';

export const Error = () => {
  const { t } = useTranslation();

  return (
    <Container sx={errorStyles}>
      <Typography variant="body1" noWrap sx={errorTypography}>
        {t('error404')}
      </Typography>
      <Link style={errorLink} to="/main">
        <Button variant="outlined" size="medium">
          {t('errorBack')}
        </Button>
      </Link>
    </Container>
  );
};
