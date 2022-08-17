import { configureStore } from '@reduxjs/toolkit';
// import { authApi } from './auth/authSlice';
import { contactAPI } from './contact-sliceApi';
import { authSlice } from './auth/auth-slice';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware(),
  // authApi.middleware,
  contactAPI.middleware,
];

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
    auth: authSlice.reducer
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware,
});
