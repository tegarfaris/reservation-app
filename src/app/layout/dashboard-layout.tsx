import React, { ReactNode } from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box w="full">
        <Navbar />
        <div>{children}</div>
      </Box>
    </>
  );
};

export default DashboardLayout;
