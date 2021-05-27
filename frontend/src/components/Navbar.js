import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="sm">The Cabin Company</Heading>
      </Box>
      <Spacer />
      <Box></Box>
    </Flex>
  );
};
