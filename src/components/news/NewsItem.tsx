import { useAppSelector } from '@/store/redux-hook';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { useAppDispatch } from '@/store/redux-hook';
import { removeNews } from '@/store/news/slice';
import { getIsLoggedInStatus } from '@/store/auth/selector';
import { useTranslation } from 'react-i18next';

import { newsGridCard, newsGridItem } from './newsStyles';

import type { News } from '@/types';

type NewsItemProps = Pick<News, 'title' | 'body' | 'id'>;

export const NewsItem = (props: NewsItemProps) => {
  const { body, title, id } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedInStatus);

  const handleRemoveNews = () => {
    dispatch(removeNews(id));
  };

  // TODO: text
  return (
    <Grid item xs={12} md={12} sx={newsGridItem}>
      <Card sx={newsGridCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
          <CardActions>
            {isLoggedIn && (
              <Button
                onClick={handleRemoveNews}
                size="small"
                variant="contained"
              >
                {t('delete')}
              </Button>
            )}
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
