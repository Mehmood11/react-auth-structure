import { createSlice } from "@reduxjs/toolkit";
import { signInApi } from "../../../services/auth/auth-api";
import { REQUEST_STATUS } from "../../../constants/request-status";

const initialState = {
  isAuthenticated: true,
  user: {
    userId: "",
  },
  accessToken: null,
  refreshToken: null,
  loginRequestStatus: REQUEST_STATUS.IDEL,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
      state.accessToken = "";
      state.refreshToken = "";
      // localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInApi.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.loginRequestStatus = REQUEST_STATUS.SUCCESS;
      state.accessToken = data?.data?.authToken;
      state.refreshToken = data?.data?.refreshToken;
      state.user.userId = data?.data?.userId;
      state.isAuthenticated = true;
      localStorage.setItem("access_token", data?.data?.authToken);
      localStorage.setItem("refresh_token", data?.data?.refreshToken);
    });
    builder.addCase(signInApi.pending, (state, action) => {
      state.loginRequestStatus = REQUEST_STATUS.LOADING;
    });
    builder.addCase(signInApi.rejected, (state, error) => {
      state.isAuthenticated = false;
      state.loginRequestStatus = REQUEST_STATUS.FAILURE;
    });
  },
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
