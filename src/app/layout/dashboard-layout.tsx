import React, { ReactNode } from "react";
import Navbar from "../components/navbar";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main>
        <Navbar />
        <div>{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
