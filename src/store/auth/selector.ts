import type { RootState } from '../store';

export const getIsLoggedInStatus = (state: RootState) => state.auth.isLoggedIn;

export const getValidationStatus = (state: RootState) => state.auth.status;

export const getValidationError = (state: RootState) => state.auth.errorRequest;
