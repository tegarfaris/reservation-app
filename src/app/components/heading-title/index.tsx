import { Button, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface HeadingTitleProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  extraTitle?: string | ReactNode;
}
const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
  subtitle,
  buttonText,
  extraTitle = "",
}) => {
  return (
    <Flex flexDir="column" gap="10px" w="full">
      <Text
        fontSize="40px"
        fontWeight={700}
        color={extraTitle !== "" ? "#000" : "white"}
      >
        {title} {extraTitle !== "" && extraTitle}
      </Text>
      <Text
        color={extraTitle !== "" ? "#000" : "white"}
        fontSize="20px"
        fontWeight="400"
      >
        {subtitle}
      </Text>
      <Button
        size="md"
        w="216px"
        color={extraTitle === "" ? "#000" : "white"}
        bg={extraTitle !== "" ? "#106A64" : "white"}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};

export default HeadingTitle;
