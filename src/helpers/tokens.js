export const setToken = (accessToken) =>
  localStorage.setItem("access_token", accessToken);
export const getToken = () => localStorage.getItem("access_token");
export const getLanguage = () => localStorage.getItem("language");
