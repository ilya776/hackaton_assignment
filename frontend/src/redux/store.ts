import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { authSlice } from "@/modules/auth/slices/authSlice";
import {booksApi} from "@/modules/books/services/booksApi.ts";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware , booksApi.middleware]),
});
