import getFromLocalStorage from '@/utils/getFromLocalStorage';
import { createSlice } from '@reduxjs/toolkit';

import { fetchMockData } from './actions';

import type { AsyncThunkStatus } from '@/types/slice';
import type { DeserializedValue } from '@/utils/getFromLocalStorage';

export type AuthSlice = {
  isLoggedIn: DeserializedValue;
  status: AsyncThunkStatus;
  errorRequest: string;
};

const initialState: AuthSlice = {
  isLoggedIn: getFromLocalStorage('isLoggedIn', false),
  status: 'idle',
  errorRequest: '',
};

const authSlice = createSlice({
  name: '@auth',
  initialState,
  reducers: {
    setLoggedInStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMockData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMockData.fulfilled, (state, _action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.errorRequest = '';
      })
      .addCase(fetchMockData.rejected, (state) => {
        state.status = 'rejected';
        state.errorRequest = 'invalid login or password';
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;

export const { setLoggedInStatus } = authSlice.actions;
