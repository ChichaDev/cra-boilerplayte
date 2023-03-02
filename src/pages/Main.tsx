import { MainList } from '@/components/main/MainList';
import { useTranslation } from 'react-i18next';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

import { mainContainer, mainStyles } from './pageStyles';

export const Main = () => {
  const { t } = useTranslation();

  return (
    <Container sx={mainContainer}>
      <Typography variant="h5" noWrap sx={mainStyles}>
        {t('comments')}
      </Typography>
      <MainList />
    </Container>
  );
};
