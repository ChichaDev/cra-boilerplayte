import { createSlice } from '@reduxjs/toolkit';

import { fetchComments, fetchMoreComments } from './actions';

import type { Comment } from '@/types';
import type { AsyncThunkStatus } from '@/types/slice';

export type CommentsSlice = {
  status: AsyncThunkStatus;
  commentList: Comment[];
  countComments: number;
};

const initialState: CommentsSlice = {
  status: 'idle',
  commentList: [],
  countComments: 10,
};

const commentsSlice = createSlice({
  name: '@comments',
  initialState,
  reducers: {
    removeComment(state, action) {
      state.commentList = state.commentList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.commentList = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchMoreComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreComments.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.commentList = [...state.commentList, ...action.payload];
        state.countComments = state.countComments + 10;
      })
      .addCase(fetchMoreComments.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const { removeComment } = commentsSlice.actions;
export default commentsSlice.reducer;
