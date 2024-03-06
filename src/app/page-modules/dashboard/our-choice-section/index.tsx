import TitleSection from "@/app/components/title-section";
import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import OCSCardInfo from "./_components/ocs-card-info";

const OurChoiceSection = () => {
  const DATA_VILLA = [
    {
      id: 1,
      name: "4 Bedroom villa",
      facilities: ["Wifi Provide", "TV & Karouke", "Kitchecn", "Swimming Pool"],
      bed: "4",
      person: "4",
      price: "3.749.000 ",
    },
    {
      id: 2,
      name: "Joglo House",
      facilities: ["Wifi Provide", "TV & Karouke", "Kitchecn", "Swimming Pool"],
      bed: "7",
      person: "7",
      price: "5.749.000 ",
    },
    {
      id: 3,
      name: "Kudus House",
      facilities: ["Wifi Provide", "TV & Karouke", "Kitchecn", "Swimming Pool"],
      bed: "5",
      person: "5",
      price: "4.749.000 ",
    },
  ];
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      gap="50px"
      maxW="1024"
      mx="auto"
      minH="100vh"
    >
      <TitleSection title="Our choise of" greenText="Villa Studios" />

      {/* card section */}
      <Grid templateColumns="repeat(3, 1fr)" gap="20px">
        {DATA_VILLA.map((villa) => (
          <GridItem key={villa.id}>
            <OCSCardInfo
              villaName={villa.name}
              facilities={villa.facilities}
              bed={villa.bed}
              person={villa.person}
              price={villa.price}
              spotlight={villa.id === 2}
            />
          </GridItem>
        ))}
      </Grid>
      <Button
        variant="solid"
        bg="#CFE1E04D"
        color="#106A64"
        fontSize="20px"
        fontWeight={400}
      >
        Load More
      </Button>
    </Flex>
  );
};

export default OurChoiceSection;
