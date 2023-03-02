import { createAsyncThunk } from '@reduxjs/toolkit';
import { FAKE_USER_DATA } from '@/components/mock/fakeUserData';

import { setLoggedInStatus } from './slice';

import type { SignInForm } from '@/components/auth/AuthForm';
import type { Dispatch } from '@reduxjs/toolkit';

export const setLoggedInStatusThunk =
  (status: boolean) => (dispatch: Dispatch) => {
    localStorage.setItem('isLoggedIn', JSON.stringify(status));
    dispatch(setLoggedInStatus(status));
  };

export const fetchMockData = createAsyncThunk(
  'auth/fetchMockData',
  async function (user: SignInForm) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          user.Login === FAKE_USER_DATA.Login &&
          user.Password === FAKE_USER_DATA.Password
        ) {
          resolve('valid');
        }

        reject('User not defined');
      }, 2000);
    });
  },
);
