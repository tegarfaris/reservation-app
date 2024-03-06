import { Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./hero";
import AboutSection from "./about-section";
import AvaibilityCard from "./avaibility-card";
import OurChoiceSection from "./our-choice-section";
import VariousFacilitiesSection from "./various-facilities-section";
import WhatOurCustomerSection from "./what-our-customer-section";

const DashboardPage: React.FC = () => {
  return (
    <Flex flexDir="column" gap="10px">
      <Hero />
      <AvaibilityCard />
      <AboutSection />
      <OurChoiceSection />
      <VariousFacilitiesSection />
      <WhatOurCustomerSection />
    </Flex>
  );
};

export default DashboardPage;
