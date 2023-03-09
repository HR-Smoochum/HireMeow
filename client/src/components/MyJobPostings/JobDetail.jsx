/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Box, Button, Center, Heading, Tag,
} from '@chakra-ui/react';

export default function JobCard({ Job, setShowMore, handleSingleApply }) {
  return (
    <Box>
      <Heading as="h4" size="md">
        {Job.title}
      </Heading>
      <Tag bg="brand.green" mb="30px">{Job.company}</Tag>
      <Box onClick={() => setShowMore(0)}>
        {Job.description}
      </Box>
      <Center>
        <Button
          mt="30px"
          bg="brand.green"
          color="white"
          onClick={() => {
            handleSingleApply(Job.id);
            setShowMore(0);
          }}
        >
          Apply
        </Button>
      </Center>
    </Box>
  );
}
