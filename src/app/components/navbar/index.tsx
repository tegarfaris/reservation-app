import { ICONS } from "@/app/helper/image.helper";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      pos="absolute"
      top={0}
      w="100%"
      px="190px"
      gap="10px"
      justifyContent="space-between"
      bg="transparent"
      zIndex={20}
      color="white"
      pt="30px"
    >
      <Flex gap="10px">
        <Image src={ICONS.HAMBURGER_ICON} alt="hamburger-menu" />
        <Text>Villa Category</Text>
      </Flex>

      <Flex gap="10px">
        <Text>Contact US</Text>
        <Text>Login</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
