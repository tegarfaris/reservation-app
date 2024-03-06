import HeadingTitle from "@/app/components/heading-title";
import TitleSection from "@/app/components/title-section";
import { HERO, PATTERNS } from "@/app/helper/image.helper";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const VariousFacilitiesSection = () => {
  return (
    <Grid
      pos="relative"
      templateColumns="repeat(10,1fr)"
      gap="20px"
      maxW="1100px"
      mx="auto"
      minH="70vh"
      zIndex={20}
    >
      <GridItem pos="relative" colSpan={4} pr="10px" zIndex={20}>
        <Image
          pos="absolute"
          src={PATTERNS.CIRCLE_PATTERN}
          w="104px"
          h="118px"
          top={-20}
          left={-10}
          alt="pattern"
          zIndex={10}
        />
        <Box pos="relative" zIndex={20}>
          <HeadingTitle
            title="Various"
            extraTitle={
              <Text as="span">
                <Text as="span" color="#106A64">
                  facilities
                </Text>{" "}
                that you can enjoy
              </Text>
            }
            subtitle="We bring you together with your dream holiday"
            buttonText="Explore"
          />
        </Box>
      </GridItem>
      <GridItem pos="relative" zIndex={20} colSpan={3}>
        <Image src={HERO.HERO_BG} w="319px" h="319px" alt="preview-various" />
      </GridItem>
      <GridItem pos="relative" zIndex={20} colSpan={3}>
        <Image src={HERO.HERO_BG} w="319px" h="319px" alt="preview-various" />
      </GridItem>
      <Box
        pos="absolute"
        right={-96}
        top={20}
        w="876px"
        h="324px"
        bgColor="#F1F6F6"
        zIndex={10}
      />
    </Grid>
  );
};

export default VariousFacilitiesSection;
