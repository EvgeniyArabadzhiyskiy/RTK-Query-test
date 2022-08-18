import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { token } from 'components/LoginForm/LoginForm';


export const contactAPI = createApi({
  reducerPath: 'contactApi',

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

  tagTypes: ['Contact'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: contact => ({ url: '/contacts', method: 'POST', body: contact }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),

    toggleFavorites: builder.mutation({
      query: ({ id, favorites }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: { favorites },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useToggleFavoritesMutation,
} = contactAPI;
