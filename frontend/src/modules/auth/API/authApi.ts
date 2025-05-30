import { baseApi } from "@/redux/baseApi";
import type { LoginResponse, SignInData, SignUpData } from "../types/authTypes";

const USER_ENDPOINT = "auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<LoginResponse, SignUpData>({
      query: (data) => ({
        url: `${USER_ENDPOINT}/register/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    logIn: builder.mutation<LoginResponse, SignInData>({
      query: (data) => ({
        url: `${USER_ENDPOINT}/login/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
