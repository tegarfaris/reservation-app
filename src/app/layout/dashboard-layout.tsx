import React, { ReactNode } from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box w="full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Box>
    </>
  );
};

export default DashboardLayout;
