import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

const Layout: React.FC = () => {
  return (
    <div>
      {/* <Suspense> */}
      <Header />
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;
