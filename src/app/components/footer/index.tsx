import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" px="190px" pb="60px">
      <GridItem>
        <Text fontSize="28px" fontWeight={500} pb="20px">
          Quick Links
        </Text>
        <Box gap="20px">
          <Text>About</Text>
          <Text>Facility</Text>
          <Text>Gallery</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Text fontSize="28px" fontWeight={500} pb="20px">
          Room Category
        </Text>
        <Box>
          <Text>4 Bedroom Villa</Text>
          <Text>2 Bedroom Villa</Text>
          <Text>Joglo House</Text>
          <Text>Bamboo Studio</Text>
          <Text>Bamboo House</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Text fontSize="28px" fontWeight={500} pb="20px">
          Contact Us
        </Text>
        <Box as={Flex} flexDir="column" w="full" gap="20px">
          <Text
            as={Flex}
            fontSize="14px"
            fontWeight={400}
            gap="10px"
            alignItems="center"
          >
            <SiGooglemaps size={20} />
            Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa Barat
          </Text>
          <Text
            as={Flex}
            fontSize="14px"
            fontWeight={400}
            gap="10px"
            alignItems="center"
          >
            <BsFillTelephoneFill size={20} />+ 62812345678
          </Text>
          <Text
            as={Flex}
            fontSize="14px"
            fontWeight={400}
            gap="10px"
            alignItems="center"
          >
            <MdEmail size={20} />
            example@gmail.com
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Footer;
