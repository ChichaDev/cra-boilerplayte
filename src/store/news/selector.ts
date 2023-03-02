import type { RootState } from '../store';

export const getCountNews = (state: RootState) => state.news.countNews;

export const getNews = (state: RootState) => state.news.newsList;

export const getStatusNews = (state: RootState) => state.news.status;
