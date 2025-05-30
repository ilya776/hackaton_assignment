import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
    endpoints: (builder) => ({
        getBooks: builder.query<any, void>({
            query: () => 'books/',
        }),
        getBookById: builder.query({
            query: (id) => `books/${id}/`,
        }),
    }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
