import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/auth-slice';
import { contactAPI } from './contact-sliceApi';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware(),
  authApi.middleware,
  contactAPI.middleware,
];

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware,
});
















// import { configureStore } from '@reduxjs/toolkit';
// import { contactAPI } from './contact-sliceApi';
// import { authSlice } from './auth/auth-slice';

// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware(),
//   contactAPI.middleware,
// ];

// export const store = configureStore({
//   reducer: {
//     [contactAPI.reducerPath]: contactAPI.reducer,
//     auth: authSlice.reducer
//   },
//   middleware,
// });

