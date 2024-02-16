// import { useCallback, useEffect, useState } from "react";

// import { LogoSsoAdmin, SplashScreen } from "common";
// import { useAuthMeMutation } from "@services/auth-api";
// import { useDispatch, useSelector } from "@store";
// import { authActions } from "@slices";
// import toast from "react-hot-toast";


// export function AuthInitializer(props){
//   const [isInitialized, setIsInitialized] = useState(false);

//   const {
//     auth: {
//       refreshToken,
//       accessToken,
//       user: { userId },
//     },
//   } = useSelector(
//     (state: { auth }) => state
//   );
//   const [mutation, { isLoading }] = useAuthMeMutation();
//   const { children, handleTheme } = props;
//   const dispatch = useDispatch();

//   const initialize = useCallback(async () => {
//     if (accessToken && refreshToken) {
//       try {
//         await mutation({ userId, refreshToken }).unwrap();
//       } catch (error) {
//         toast.error(error?.data?.message || "Something Went Wrong");
//         dispatch(authActions.logout());
//       }
//     } else {
//       dispatch(authActions.logout());
//     }
//     setIsInitialized(true);
//   }, []);

//   useEffect(() => {
//     void initialize();
//   }, [initialize]);


//   if (isLoading || !isInitialized) {
//     return (
//       <>Logo</>
//     );
//   }

//   return <>{children}</>;
// }
