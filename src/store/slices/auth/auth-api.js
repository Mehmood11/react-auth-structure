import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPostRequest, apiPutRequest } from "../../../helpers/requests";
import { endPoints } from "../../../config/endpoints";

export const signInApi = createAsyncThunk("auth/login", async (payload) => {
  const res = await apiPostRequest(endPoints.signIn, payload);
  return await Promise.resolve(res);
});

export const signUpApi = createAsyncThunk("auth/register", async (payload) => {
  const res = await apiPutRequest(endPoints.signUp, payload);
  return await Promise.resolve(res);
});
