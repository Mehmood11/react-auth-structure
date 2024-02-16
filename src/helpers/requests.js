import axios from "axios";
import { environment } from "../config/environment.config";
import { getLanguage, getToken } from "./tokens";
export const BASE_URL = environment.apiKey;

// Get request Function
export const apiGetRequest = (endpoint, token = null, props = {}) =>
  ApiRequest("GET", endpoint, token, props);

// Post request Function
export const apiPostRequest = (endpoint, payload, token = null) =>
  ApiRequest("POST", endpoint, token, { data: payload });

// Patch request Function
export const apiPatchRequest = (endpoint, payload, token = null) =>
  ApiRequest("PATCH", endpoint, token, { data: payload });

// Put Request Function
export const apiPutRequest = (
  endpoint,
  payload,
  token = null,
  queryParams = {}
) => ApiRequest("PUT", endpoint, token, { data: payload }, queryParams);

// Delete Request Function
export const apiDeleteRequest = (endpoint, token = null, props = {}) =>
  ApiRequest("DELETE", endpoint, token, props);

// Api Request for all the api methods
export const ApiRequest = (
  method,
  endpoint,
  token = null,
  props = {},
  queryParams = {}
) => {
  if (!token) {
    token = getToken();
  }
  const params = {
    method,
    baseURL: BASE_URL,
    url: endpoint,
    params:
      method.toLowerCase() === "get" || method.toLowerCase() === "delete"
        ? props
        : queryParams,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      language: getLanguage(),
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  return axios(params);
};
