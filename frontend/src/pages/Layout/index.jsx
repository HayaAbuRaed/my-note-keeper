import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../containers/Navbar";

const Layout = () => {
  return (
    <div style={{position: "relative"}}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
