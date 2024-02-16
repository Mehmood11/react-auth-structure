import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  user: {},
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.user = initialState.user;
    },
  },
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
