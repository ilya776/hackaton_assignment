import { baseApi } from "@/redux/baseApi";
import type { IUser } from "../types/userTypes";

const USER_ENDPOINT = "auth/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => USER_ENDPOINT,
    }),

    setUserData: builder.mutation<null, Omit<IUser, "createdAt">>({
      query: ({ id, ...patch }) => ({
        url: `${USER_ENDPOINT}/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["User"],
    }),

    resetPassword: builder.query<IUser, void>({
      query: () => `${USER_ENDPOINT}"/reset/"`,
    }),
  }),
});

export const { useGetUserQuery, useSetUserDataMutation } = userApi;
