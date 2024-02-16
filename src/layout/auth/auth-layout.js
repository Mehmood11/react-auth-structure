import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { WithGuestGuard } from "../../hoc/with-guest-guard";
import { NProgress } from "../../components/nprogress";

const AuthLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && <NProgress />}
      <>
        <Outlet />
      </>
    </>
  );
};

export default WithGuestGuard(AuthLayout);
