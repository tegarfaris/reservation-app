import { HERO } from "@/app/helper/image.helper";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const AboutSection = () => {
  return (
    <Flex flexDir="column" bg="white" minH="100vh" px="150px" mt="150px">
      <Text fontSize="40px" fontWeight={600}>
        About Villa{" "}
        <Text as="span" color="#106A64">
          Amadaha
        </Text>
      </Text>

      <Flex  pos="relative">
        <Image
          src={HERO.HERO_BG}
          alt="asset-villa"
          w="368px"
          h="368px"
          objectFit="cover"
        />
        <Box pos="absolute" top="10px" right="-20px" w="368px" h="368px" border="1px solid" borderColor="#106A64" />
        <Text fontSize="20px" textAlign="left" fontWeight={400}>
          Villa Amadaha consist of Two Luxury Villas and one Traditional
          Javanese House surrounded by a tranquil rain forest setting,
          traditional Indonesian houses anda a farm overlooking the area.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutSection;
