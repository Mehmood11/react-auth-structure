import { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/auth/auth-layout";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import MainLayout from "../layout/main/main-layout";
import Dashboard from "../pages/main/dashboard";
import Home from "../pages/main/home/home";

const RootRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);
  return null;
};

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Error</h1>,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RootRedirect />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <h1>Error</h1>,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "home",
        element: <Home />,
        loader: async () => {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          ).then((data) => data.json());
          return res;
        },
      },
    ],
  },
]);
