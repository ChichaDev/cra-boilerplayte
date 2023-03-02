import { createAsyncThunk } from '@reduxjs/toolkit';

import type { News } from '@/types';
import type { NewsSlice } from './slice';

export const fetchNews = createAsyncThunk<
  News[],
  undefined,
  { state: { news: NewsSlice } }
>(
  'news/fetchNews',
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?&_limit=5',
    );
    return (await response.json()) as News[];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().news;

      if (status === 'loading') {
        return false;
      }
    },
  },
);

export const fetchMoreNews = createAsyncThunk<
  News[],
  number,
  { state: { news: NewsSlice } }
>(
  'news/fetchMoreNews',
  async (start = 0) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`,
    );
    return (await response.json()) as News[];
  },
  {
    condition: (start, { getState }) => {
      const { status } = getState().news;

      if (status === 'loading') {
        return false;
      }
    },
  },
);
