import { useCallback, useEffect, useState } from "react";
// import { useAuthMeMutation } from "@services/auth-api";
// import toast from "react-hot-toast";
import { logout } from "../store/slices/auth/auth-slice";
import { useDispatch, useSelector } from "react-redux";

export function AuthInitializer(props) {
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    auth: {
      refreshToken,
      accessToken,
      user: { userId },
    },
  } = useSelector((state) => state);
  console.log(refreshToken, accessToken);
  // const [mutation, { isLoading }] = useAuthMeMutation();
  const { children } = props;
  const dispatch = useDispatch();

  const initialize = useCallback(async () => {
    if (accessToken && refreshToken) {
      try {
        // await mutation({ userId, refreshToken }).unwrap();
      } catch (error) {
        // toast.error(error?.data?.message || "Something Went Wrong");
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
    setIsInitialized(true);
  }, [accessToken, dispatch, refreshToken]);

  useEffect(() => {
    void initialize();
  }, [initialize]);

  if (!isInitialized) {
    return <>Loading....</>;
  }

  return <>{children}</>;
}
