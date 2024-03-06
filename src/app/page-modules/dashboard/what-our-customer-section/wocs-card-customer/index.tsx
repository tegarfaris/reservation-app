import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface WOCSCardCustomerProps {
  comment: string;
  author: string;
  job: string;
}
const WOCSCardCustomer: React.FC<WOCSCardCustomerProps> = ({
  comment,
  author,
  job,
}) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-evenly"
      bg="white"
      w="368px"
      h="240px"
      boxShadow="lg"
      p="20px"
    >
      <Text fontSize="14px" fontWeight={400}>
        {comment}
      </Text>

      {/* Avatar section */}
      <Flex gap="10px">
        <Avatar name="Tegar" w="40px" h="40px" rounded="full" />
        <Box gap="10px">
          <Text color="#106A64" fontSize="12px" fontWeight={500}>
            {author}
          </Text>
          <Text>{job}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WOCSCardCustomer;
