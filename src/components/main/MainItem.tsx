import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '@/store/redux-hook';
import { removeComment } from '@/store/comments/slice';
import { getIsLoggedInStatus } from '@/store/auth/selector';
import { useAppSelector } from '@/store/redux-hook';
import { useTranslation } from 'react-i18next';

import { mainGridCard, mainGridItem } from './mainStyles';

import type { Comment } from '@/types';

type MainItemProps = Pick<Comment, 'id' | 'name' | 'email' | 'body'>;

export const MainItem = (props: MainItemProps) => {
  const { id, body, email, name } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedInStatus);

  const handleRemoveComment = () => {
    dispatch(removeComment(id));
  };

  return (
    <Grid item xs={12} md={12} sx={mainGridItem}>
      <Card sx={mainGridCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            by {email}
          </Typography>
          <CardActions>
            {isLoggedIn && (
              <Button
                onClick={handleRemoveComment}
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
