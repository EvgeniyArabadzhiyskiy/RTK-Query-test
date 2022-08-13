import { configureStore } from '@reduxjs/toolkit';
import { contactAPI } from './contact-sliceApi';

const middleware = getDefaultMiddleware => [...getDefaultMiddleware(), contactAPI.middleware];;

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
  },
  middleware,
});
