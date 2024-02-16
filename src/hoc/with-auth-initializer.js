import { useEffect, useState } from "react";
import { useDispatch } from "../store";
import {
  handleAuthentication,
  setAxiosInterceptors,
} from "../helpers/interceptors";
import { logout } from "../store/slices/auth/auth-slice";

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });
      handleAuthentication();
      setLoading(false);
    };
    initAuth();
  }, [dispatch]);

  if (isLoading) {
    return <>Loading....</>;
  }

  return children;
};

export default AuthInitializer;
