import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { token } from 'components/LoginForm/LoginForm';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',

    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token;
      console.log("token", token);

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  //   tagTypes: ['Auth'],

  endpoints: builder => ({
    userRegister: builder.mutation({
      query: user => {
        console.log('user', user);

        return { url: '/users/signup', method: 'POST', body: user };
      },
    }),

    userLogin: builder.mutation({
      query: user => {
        // console.log('user', user);

        return { url: '/users/login', method: 'POST', body: user };
      },
    }),

    userLogOut: builder.mutation({
      query: () => {
        return { url: '/users/logout', method: 'POST' };
      },
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserLogOutMutation,
} = authApi;
// console.log('authApi', authApi);






// import userOperations from './auth-operatons';
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {

//     [userOperations.register.fulfilled]: (state, actions) => {
//       state.user = actions.payload.user;
//       state.token = actions.payload.token;
//       state.isLoggedIn = true;
//     },

//     [userOperations.logIn.fulfilled]: (state, actions) => {
//       state.user = actions.payload.user;
//       state.token = actions.payload.token;
//       state.isLoggedIn = true;
//     },

//     [userOperations.logOut.fulfilled]: (state, actions) => {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },

//     // [userOperations.fetchCurrentUser.pending]: (state, actions) => {
//     //   state.isFetchingCurrentUser = true;
//     // },
//     // [userOperations.fetchCurrentUser.fulfilled]: (state, actions) => {
//     //   state.user = actions.payload;
//     //   state.isLoggedIn = true;
//     //   state.isFetchingCurrentUser = false;
//     // },
//     // [userOperations.fetchCurrentUser.rejected]: (state, actions) => {
//     //   state.isFetchingCurrentUser = false;
//     // },

//   },
// });
