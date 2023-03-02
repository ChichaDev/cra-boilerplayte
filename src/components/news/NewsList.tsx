import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { getNews } from '@/store/news/selector';
import { getCountNews } from '@/store/news/selector';
import { getStatusNews } from '@/store/news/selector';
import { fetchNews, fetchMoreNews } from '@/store/news/actions';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';

import { Loader } from '../status/Loader';
import { NewsItem } from './NewsItem';
import { newsGridContainer } from './newsStyles';
import { CustomBtn } from '../ui/CustomBtn';

export const NewsList = () => {
  const dispatch = useAppDispatch();

  const newsList = useAppSelector(getNews);
  const countNews = useAppSelector(getCountNews);
  const status = useAppSelector(getStatusNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleMoreNews = () => {
    dispatch(fetchMoreNews(countNews));
  };

  if (status === 'loading' && !newsList.length) {
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
    <Grid container spacing={2} sx={newsGridContainer}>
      {newsList.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
      <CustomBtn
        disabled={status === 'loading' ? true : false}
        onClick={handleMoreNews}
      >
        {status === 'loading' ? 'Loading...' : 'Load more'}
      </CustomBtn>
    </Grid>
  );
};
