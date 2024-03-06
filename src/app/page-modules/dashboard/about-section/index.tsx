import TitleSection from "@/app/components/title-section";
import { HERO, PATTERNS } from "@/app/helper/image.helper";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const AboutSection = () => {
  return (
    <Flex
      flexDir="column"
      bg="white"
      minH="90vh"
      gap="100px"
      px="150px"
      mt="150px"
    >
      <TitleSection title="About Villa" greenText="Amadaha" />

      <Grid pos="relative" templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={2}>
          <Image
            src={HERO.HERO_BG}
            alt="asset-villa"
            w="368px"
            h="368px"
            objectFit="cover"
            pos="relative"
            zIndex={30}
          />
          <Box
            pos="absolute"
            zIndex={20}
            top="10px"
            left="10px"
            w="368px"
            h="368px"
            border="1px solid"
            borderColor="#106A64"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Image
            pos="absolute"
            right="150px"
            top="-200px"
            src={PATTERNS.CIRCLE_PATTERN}
            alt="pattern"
          />
          <Flex
            flexDir="column"
            gap="20px"
            h="full"
            justifyContent="space-between"
          >
            <Text fontSize="24px" textAlign="left" fontWeight={400}>
              Villa Amadaha consist of Two Luxury Villas and one Traditional
              Javanese House surrounded by a tranquil rain forest setting,
              traditional Indonesian houses anda a farm overlooking the area.
            </Text>
            <Flex gap="50px">
              <Flex flexDir="column" gap="10px">
                <Text fontSize="24px" fontWeight={500}>
                  +6{" "}
                  <Text as="span" color="#106A64">
                    {" "}
                    / Room
                  </Text>
                </Text>
                <Text fontSize="20px" fontWeight={400}>
                  Room options
                </Text>
              </Flex>
              <Flex flexDir="column" gap="10px">
                <Text fontSize="24px" fontWeight={500}>
                  2{" "}
                  <Text as="span" color="#106A64">
                    {" "}
                    / Facilities
                  </Text>
                </Text>
                <Text fontSize="20px" fontWeight={400}>
                  Room options
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default AboutSection;
