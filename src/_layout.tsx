import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

const Layout: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-[#4ea75d42] bg-fixed h-screen">
      <Suspense fallback="잠시만요">
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
