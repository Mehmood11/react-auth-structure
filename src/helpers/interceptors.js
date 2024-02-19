import { jwtDecode } from "jwt-decode";
import { getToken } from "./tokens";
import axios from "axios";

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
  } else {
    localStorage.removeItem("access_token");
  }
};

export const isAuthenticated = () => !!getToken();
console.log(isAuthenticated());
export const handleAuthentication = () => {
  let accessToken = getToken();
  console.log(accessToken);
  if (!accessToken) {
    return;
  }
  if (isValidToken(accessToken)) {
    setSession(accessToken);
  } else {
    setSession(null);
  }
};

export const setAxiosInterceptors = ({ onLogout }) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        setSession(null);
        if (onLogout) {
          onLogout();
        }
      } else if (
        error?.response?.status === 400 ||
        error?.response?.status === 404 ||
        error?.response?.status === 413
      ) {
        return Promise.reject(error?.response?.data?.message);
      } else if (error?.response?.status === 500) {
        return Promise.reject(
          error?.response?.data?.message || "Internal Server Error"
        );
      } else {
        return Promise.reject("Something Went Wrong");
      }
    }
  );
};
