import HeadingTitle from "@/app/components/heading-title";
import { HERO } from "@/app/helper/image.helper";
import { Flex } from "@chakra-ui/react";
import React from "react";

const CTASection = () => {
  return (
    <Flex pt="50px" w="full">
      <Flex
        bgImage={HERO.HERO_BG}
        bgRepeat="no-repeat"
        bgSize="cover"
        px="190px"
        mb="50px"
        w="full"
        h="520px"
      >
        <Flex w="md" alignItems="center">
          <HeadingTitle
            title="Make your comfort is our happiness"
            buttonText="Book Now"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CTASection;
