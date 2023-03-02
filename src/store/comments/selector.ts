import type { RootState } from '../store';

export const getComments = (state: RootState) => state.comments.commentList;

export const getCountComments = (state: RootState) =>
  state.comments.countComments;

export const getStatusComments = (state: RootState) => state.comments.status;
