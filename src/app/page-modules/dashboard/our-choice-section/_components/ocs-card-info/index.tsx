import { HERO } from "@/app/helper/image.helper";
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaBed } from "react-icons/fa";

interface OCSCardInfoProps {
  villaName: string;
  facilities: string[];
  bed: string;
  person: string;
  price: string;
  spotlight: boolean;
}
const OCSCardInfo: React.FC<OCSCardInfoProps> = ({
  villaName,
  facilities,
  bed,
  person,
  price,
  spotlight,
}) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bg={spotlight ? "#106A64" : "white"}
      boxShadow="md"
      p="20px"
      w="368px"
      borderRadius="5px"
    >
      <Image
        src={HERO.HERO_BG}
        borderRadius="5px"
        alt="villa-preview"
        w="320px"
        h="322px"
        objectFit="cover"
      />
      <Flex flexDir="column" gap="10px" px="10px">
        <Text
          fontSize="16px"
          fontWeight={500}
          color={!spotlight ? "#0A0A0A" : "white"}
          pt="10px"
        >
          {villaName}
        </Text>

        <Grid
          templateColumns="repeat(2, 1fr)"
          color={!spotlight ? "#0A0A0A" : "white"}
          fontSize="12px"
          gap="15px"
        >
          <GridItem>Main Facilities</GridItem>
          <GridItem>
            {facilities.map((facilitie) => facilitie.concat(",", " "))}
          </GridItem>
          <GridItem as={Flex} gap="10px">
            <FaBed color={!spotlight ? "#0A0A0A" : "white"} size="16px" />
            <Text>{bed} Bed</Text>
          </GridItem>
          <GridItem as={Flex} gap="10px">
            <Image
              src={
                spotlight ? "/assets/person.svg" : "/assets/personNeutral.svg"
              }
              color="red"
              alt="person-svg"
              w="16px"
            />
            <Text>{person} Persons</Text>
          </GridItem>
        </Grid>
        <Text
          fontSize="20px"
          fontWeight={500}
          color={!spotlight ? "#0A0A0A" : "white"}
          mt="5px"
        >
          Rp {price} /night
        </Text>
      </Flex>
    </Flex>
  );
};

export default OCSCardInfo;
