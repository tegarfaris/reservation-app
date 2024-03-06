import { Text } from "@chakra-ui/react";
import React from "react";

const TitleSection: React.FC<{
  title: string;
  greenText?: string;
  extraTitle?: string;
}> = ({ title, greenText = "", extraTitle = "" }) => {
  return (
    <Text fontSize="40px" fontWeight={700}>
      {title}
      {greenText !== "" && (
        <Text as="span" color="#106A64">
          &nbsp;{greenText}
        </Text>
      )}
      {extraTitle !== "" && <Text as="span">&nbsp;{extraTitle}</Text>}
    </Text>
  );
};

export default TitleSection;
