import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="sm">Nomad</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link to="/cabins">Cabins</Link>
      </Box>
    </Flex>
  );
};
