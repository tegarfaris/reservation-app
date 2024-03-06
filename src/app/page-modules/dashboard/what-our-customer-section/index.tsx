import TitleSection from "@/app/components/title-section";
import { ICONS } from "@/app/helper/image.helper";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import WOCSCardCustomer from "./wocs-card-customer";

const WhatOurCustomerSection = () => {
  const DATA_TESTIMONI = [
    {
      id: 1,
      comment:
        "“The place is nice with a village atmosphere surrounded by trees, really cool”",
      author: "Phillip Press",
      job: "Traveller",
    },
    {
      id: 2,
      comment:
        "“The place is nice with a village atmosphere surrounded by trees, really cool”",
      author: "Babeh Press",
      job: "Programmer",
    },
    {
      id: 3,
      comment:
        "“The place is nice with a village atmosphere surrounded by trees, really cool”",
      author: "Lop Press",
      job: "Marketing",
    },
  ];

  return (
    <Flex flexDir="column" gap="20px" pos="relative" minH="70vh" px="190px">
      <Flex w="full" justifyContent="space-between" alignItems="start">
        <Flex pos="relative" zIndex={20} w="500px">
          <TitleSection
            title="What Our"
            greenText="Customer"
            extraTitle="Are Saying"
          />
        </Flex>
        <Flex gap="10px">
          <Image
            src="/assets/arrowLeft.svg"
            // transform="scaleX(-1)"
            // w="60px"
            alt="arrow-assets"
          />
          <Image src="/assets/arrowRight.svg" w="60px" alt="arrow-assets" />
        </Flex>
      </Flex>

      {/* quote asset */}
      <Box
        as={Flex}
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        w="120px"
        h="120px"
        bgColor="#CFE1E04D"
        rounded="full"
        top={-20}
        left={32}
        zIndex={10}
      >
        <Image src={ICONS.QUOTE_ICON} alt="quote-asset" />
      </Box>

      <Flex gap="20px" pt="10px" justifyContent="center">
        {DATA_TESTIMONI.map((testimoni) => (
          <WOCSCardCustomer
            key={testimoni.id}
            comment={testimoni.comment}
            author={testimoni.author}
            job={testimoni.job}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default WhatOurCustomerSection;
