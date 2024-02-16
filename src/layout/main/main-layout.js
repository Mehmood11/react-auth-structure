import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header/header";
import { WithAuthGuard } from "../../hoc/with-auth-guard";
import { NProgress } from "../../components/nprogress";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && <NProgress />}
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};

export default WithAuthGuard(MainLayout);
