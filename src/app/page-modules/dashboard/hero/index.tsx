import HeadingTitle from "@/app/components/heading-title";
import { HERO } from "@/app/helper/image.helper";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import AvaibilityCard from "../avaibility-card";

const Hero: React.FC = () => {
  return (
    <Flex
      pos="relative"
      zIndex={10}
      bgImage={HERO.HERO_BG}
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="110vh"
      w="full"
    >
      <Flex w="md" alignItems="center" mb="5%" ml="190px">
        <HeadingTitle
          title="Make your comfort is our happiness"
          subtitle="Studio villa made of bamboo, located near the top of Mount Geulis with a stunning 180 degree bird's eye view."
          buttonText="Explore Rooms"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
