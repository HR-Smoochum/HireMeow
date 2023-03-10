/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Box, Heading, Tag,
} from '@chakra-ui/react';

export default function AppliedAndInterviewedJobDetail({ Job, setShowMore}) {
  return (
    <Box>
      <Heading as="h4" size="md">
        {Job.title}
      </Heading>
      <Tag bg="brand.green" mb="30px" mt="8px">{Job.company}</Tag>
      <Box onClick={() => setShowMore(0)}>
        {Job.description}
      </Box>
    </Box>
  );
}
