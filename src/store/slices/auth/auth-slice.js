import { createSlice } from "@reduxjs/toolkit";
import { signInApi, signUpApi } from "./auth-api";
import { REQUEST_STATUS } from "../../../constants/request-status";

const initialState = {
  isAuthenticated: false,
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
      state.isAuthenticated = action.payload;
      state.accessToken = "";
      state.refreshToken = "";
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    // Sign in Api call
    builder.addCase(signInApi.pending, (state, action) => {
      state.loginRequestStatus = REQUEST_STATUS.LOADING;
    });
    builder.addCase(signInApi.fulfilled, (state, action) => {
      const { data } = action?.payload;
      console.log(data);
      state.loginRequestStatus = REQUEST_STATUS.SUCCESS;
      state.accessToken = data?.access_token;
      state.refreshToken = data?.refresh_token;
      state.user.userId = data?.user?.userId;
      state.isAuthenticated = true;
      localStorage.setItem("access_token", data?.access_token);
      localStorage.setItem("refresh_token", data?.refresh_token);
    });
    builder.addCase(signInApi.rejected, (state, error) => {
      state.isAuthenticated = false;
      state.loginRequestStatus = REQUEST_STATUS.FAILURE;
    });

    // Sign Up Api call
    builder.addCase(signUpApi.pending, (state) => {
      state.loginRequestStatus = REQUEST_STATUS.LOADING;
    });
    builder.addCase(signUpApi.fulfilled, (state) => {
      state.loginRequestStatus = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(signUpApi.rejected, (state) => {
      state.loginRequestStatus = REQUEST_STATUS.FAILURE;
    });
  },
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
