import TitleSection from "@/app/components/title-section";
import { HERO } from "@/app/helper/image.helper";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const OurGallerySection = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      gap="20px"
      px="190px"
      minH="100vh"
    >
      <TitleSection title="Our" greenText="Gallery" />

      <Grid
        pos="relative"
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        justifyContent="center"
        alignItems="center"
        w="full"
        zIndex={20}
      >
        <GridItem pos="relative" zIndex={20} rowSpan={2} colSpan={2}>
          <Image
            src={HERO.HERO_BG}
            w="564px"
            h="515px"
            objectFit="cover"
            alt="gallery-asset"
            borderRadius="5px"
          />
        </GridItem>
        <GridItem pos="relative" zIndex={20} colSpan={2}>
          <Image
            src={HERO.HERO_BG}
            w="564px"
            h="248px"
            objectFit="cover"
            alt="gallery-asset"
            borderRadius="5px"
          />
        </GridItem>
        <GridItem pos="relative" zIndex={20} colSpan={2} position="relative">
          <Image
            src={HERO.HERO_BG}
            w="564px"
            h="248px"
            objectFit="cover"
            alt="gallery-asset"
            borderRadius="5px"
          />
          <Box
            as={Flex}
            justifyContent="center"
            alignItems="center"
            bg="black"
            opacity="0.5"
            position="absolute"
            top="0"
            left="0"
            w="564px"
            h="100%"
            borderRadius="5px"
          />
          <Text
            pos="absolute"
            top="120px"
            left="250px"
            color="white"
            fontSize="16px"
            fontWeight={400}
            textDecoration="underline"
          >
            More photos
          </Text>
        </GridItem>
        <Box
          pos="absolute"
          left={-72}
          top={32}
          bgColor="#F1F6F6"
          w="1000px"
          h="474px"
          zIndex={10}
        />
      </Grid>
    </Flex>
  );
};

export default OurGallerySection;
