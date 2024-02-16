import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPostRequest } from "../../helpers/requests";
import { endPoints } from "../../config/endpoints";

export const signInApi = createAsyncThunk("auth/login", async (payload) => {
  const res = await apiPostRequest(endPoints.signIn, payload);
  return await Promise.resolve(res);
});
