import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { authSlice } from "@/modules/auth/slices/authSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware]),
});
