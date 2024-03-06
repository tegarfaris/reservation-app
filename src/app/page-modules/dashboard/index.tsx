import { Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./hero";
import AboutSection from "./about-section";

const DashboardPage: React.FC = () => {
  return (
    <Flex flexDir="column" gap="10px">
        <Hero />
        <AboutSection />
    </Flex>
  );
};

export default DashboardPage;
