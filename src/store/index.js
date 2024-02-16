import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/auth-slice";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

const appReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: appReducer,
});

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();
