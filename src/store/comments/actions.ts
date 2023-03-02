import { createAsyncThunk } from '@reduxjs/toolkit';

import type { CommentsSlice } from './slice';
import type { Comment } from '@/types';

export const fetchComments = createAsyncThunk<
  Comment[],
  undefined,
  { state: { comments: CommentsSlice } }
>(
  'comments/fetchComments',
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?&_limit=10',
    );
    return (await response.json()) as Comment[];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().comments;

      if (status === 'loading') {
        return false;
      }
    },
  },
);

export const fetchMoreComments = createAsyncThunk<
  Comment[],
  number,
  { state: { comments: CommentsSlice } }
>(
  'comments/fetchMoreComments',
  async (start = 0) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=10`,
    );
    return (await response.json()) as Comment[];
  },
  {
    condition: (start, { getState }) => {
      const { status } = getState().comments;

      if (status === 'loading') {
        return false;
      }
    },
  },
);
