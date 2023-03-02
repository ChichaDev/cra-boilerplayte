import newsReducer from '@/store/news/slice';
import commentReducer from '@/store/comments/slice';
import authReducer from '@/store/auth/slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  news: newsReducer,
  comments: commentReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
