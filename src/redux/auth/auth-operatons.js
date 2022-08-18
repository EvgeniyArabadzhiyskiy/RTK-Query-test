// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// let myToken = null;



// const register = createAsyncThunk('auth/REGISTER', async credentials => {
//   const res = await axios.post('/users/signup', credentials);
//   token.set(res.data.token);
//   return res.data;
// });

// const logIn = createAsyncThunk('auth/LOGIN', async credentials => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
//   };

//   const res = await fetch('https://connections-api.herokuapp.com/users/login',options);
//   const data = await res.json();

//   myToken = data.token;
//   return data;

//   // const res = await axios.post('/users/login', credentials);
//   // token.set(res.data.token);
//   // return res.data;
// });

// const logOut = createAsyncThunk('auth/LOGOUT', async () => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${myToken}`,
//     },
//   };

//   const res = await fetch('https://connections-api.herokuapp.com/users/logout',options );
//   await res.json();

//   // await axios.post('/users/logout');
//   // token.unset();
// });

// // const fetchCurrentUser = createAsyncThunk(
// //   'auth/REFRESH',
// //   async (_, { getState, rejectWithValue }) => {
// //     const state = getState();
// //     const persistedToken = state.auth.token;

// //     if (!persistedToken) {
// //       return rejectWithValue();
// //     }

// //     token.set(persistedToken);

// //     try {
// //       const res = await axios.get('/users/current');
// //       return res.data;
// //     } catch (error) {}
// //   }
// // );

// const userOperations = {
//   register,
//   logIn,
//   logOut,
//   //   fetchCurrentUser,
// };
// export default userOperations;
