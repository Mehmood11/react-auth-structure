import React from "react";
import { logout } from "../../store/slices/auth/auth-slice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      Dashboard
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
