import React from "react";
import Navbar from "./Home/Navbar";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
