import { ICONS } from "@/app/helper/image.helper";
import { Button, Divider, Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";

const AvaibilityCard = () => {
  return (
    <Flex zIndex={30} w="full" justifyContent="center" mt="-70px">
      <Flex
        color="white"
        w="1152px"
        h="112px"
        boxShadow="md"
        px="10px"
        borderRadius="10px"
        bg="white"
        alignItems="center"
        bottom={-14}
        justifyContent="center"
      >
        <Flex
          w="full"
          h="full"
          py="25px"
          justifyContent="space-around"
          alignItems="center"
          fontSize="20px"
        >
          <Flex gap="10px">
            <Text color="black">Room</Text>
            <Image src={ICONS.ARROW_DOWN_GREEN} alt="check-in" />
          </Flex>
          <Divider orientation="vertical" />
          <Flex gap="10px">
            <Image src={ICONS.CALENDER_ICON} alt="check-in" />
            <Text color="black">Check in</Text>
          </Flex>
          <Divider orientation="vertical" />
          <Flex gap="10px">
            <Image src={ICONS.CALENDER_ICON} alt="check-in" />
            <Text color="black">Check out</Text>
          </Flex>
          <Button variant="solid" color="white" bg="#106A64">
            Check Avaibility
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AvaibilityCard;
