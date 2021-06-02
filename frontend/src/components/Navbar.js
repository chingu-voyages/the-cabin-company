import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="lg">
          <Link to="/">The Cabin Company</Link>
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  );
};
