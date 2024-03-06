import { Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./hero";
import AboutSection from "./about-section";
import AvaibilityCard from "./avaibility-card";
import OurChoiceSection from "./our-choice-section";
import VariousFacilitiesSection from "./various-facilities-section";
import WhatOurCustomerSection from "./what-our-customer-section";
import OurGallerySection from "./our-gallery-section";
import CTASection from "./cta-section";

const DashboardPage: React.FC = () => {
  return (
    <Flex flexDir="column" gap="10px">
      <Hero />
      <AvaibilityCard />
      <AboutSection />
      <OurChoiceSection />
      <VariousFacilitiesSection />
      <WhatOurCustomerSection />
      <OurGallerySection />
      <CTASection />
    </Flex>
  );
};

export default DashboardPage;
