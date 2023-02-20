import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

const Layout: React.FC = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <Suspense fallback="잠시만요">
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
