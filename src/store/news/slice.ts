import { createSlice } from '@reduxjs/toolkit';

import { fetchNews, fetchMoreNews } from './actions';

import type { News } from '@/types';
import type { AsyncThunkStatus } from '@/types/slice';

export type NewsSlice = {
  status: AsyncThunkStatus;
  newsList: News[];
  countNews: number;
};

const initialState: NewsSlice = {
  status: 'idle',
  newsList: [],
  countNews: 5,
};

const newsSlice = createSlice({
  name: '@news',
  initialState,
  reducers: {
    removeNews(state, action) {
      state.newsList = state.newsList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.newsList = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchMoreNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreNews.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.newsList = [...state.newsList, ...action.payload];
        state.countNews = state.countNews + 5;
      })
      .addCase(fetchMoreNews.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const { removeNews } = newsSlice.actions;
export default newsSlice.reducer;
