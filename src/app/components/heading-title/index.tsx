import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const HeadingTitle = () => {
  return (
    <Flex flexDir="column" gap="10px" w="full">
      <Text fontSize="40px" fontWeight={700} color="white">Make your comfort is our happiness</Text>
      <Text color="white" fontWeight="400">
        Studio villa made of bamboo, located near the top of Mount Geulis with a
        stunning 180 degree bird&apos;s eye view.
      </Text>
      <Button size="md" w="216px">Explore Rooms</Button>
    </Flex>
  );
};

export default HeadingTitle;
