import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="sm">The Cabin Company</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link to="/login">Login</Link>
      </Box>
      <Box>
        <Link to="/register">Register</Link>
      </Box>
    </Flex>
  );
};
