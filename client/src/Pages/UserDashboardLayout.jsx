import React from "react";
import NavigBar from "./UserDashboard/NavigBar";
import { Outlet } from "react-router-dom";

function UserDashboardLayout() {
  return (
    <div>
      <NavigBar />
      <Outlet />
    </div>
  );
}

export default UserDashboardLayout;
