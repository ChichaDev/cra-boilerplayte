import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { NewsList } from '@/components/news/NewsList';

import { newsContainer, newsStyles } from './pageStyles';

export const News = () => {
  const { t } = useTranslation();

  return (
    <Container sx={newsContainer}>
      <Typography variant="h5" noWrap sx={newsStyles}>
        {t('news')}
      </Typography>

      <NewsList />
    </Container>
  );
};
