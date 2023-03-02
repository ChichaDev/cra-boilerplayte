import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';
import { getStatusComments } from '@/store/comments/selector';
import { getCountComments } from '@/store/comments/selector';
import { fetchComments, fetchMoreComments } from '@/store/comments/actions';
import { getComments } from '@/store/comments/selector';

import { MainItem } from './MainItem';
import { mainGridContainer } from './mainStyles';
import { Loader } from '../status/Loader';
import { CustomBtn } from '../ui/CustomBtn';

export const MainList = () => {
  const dispatch = useAppDispatch();

  const commentsList = useAppSelector(getComments);
  const countComments = useAppSelector(getCountComments);
  const status = useAppSelector(getStatusComments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleMoreComments = () => {
    dispatch(fetchMoreComments(countComments));
  };

  if (status === 'loading' && !commentsList.length) {
    return <Loader />;
  }

  if (status === 'rejected') {
    return (
      <div>
        <h1>An error occured reload the page</h1>
      </div>
    );
  }

  return (
    <Grid container spacing={2} sx={mainGridContainer}>
      {commentsList.map((item) => (
        <MainItem key={item.id} {...item} />
      ))}
      <CustomBtn
        disabled={status === 'loading' ? true : false}
        onClick={handleMoreComments}
      >
        {status === 'loading' ? 'Loading...' : 'Load more'}
      </CustomBtn>
    </Grid>
  );
};
