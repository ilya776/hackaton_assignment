import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi";
import type { LoginResponse } from "../types/authTypes";

export interface IAuthState {}

const initialState: IAuthState = {};


const handleAuthSuccess = (_state:IAuthState, action: PayloadAction<LoginResponse>) => {
  const { access, refresh } = action.payload.tokens;
  localStorage.setItem("accessToken", access);
  localStorage.setItem("refreshToken", refresh);
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        handleAuthSuccess
      )
      .addMatcher(
        authApi.endpoints.signUp.matchFulfilled,
        handleAuthSuccess
      );
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;