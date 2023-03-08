/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Box, Button, Center, Heading, Tag,
} from '@chakra-ui/react';

// Job = {
//   id: 1,
//   title: 'software engineer',
//   location: 'seattle',
//   employment: 'remote',
//   experience: 'entry level',
//   date: '3/1/2023',
//   logo: 'https://images.app.goo.gl/SW3mMuphfe114aZT9',
//   company: 'google',
// }
export default function JobCard({ Job, setShowMore }) {
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
        <Button mt="30px" bg="brand.green" color="white"> Apply</Button>
      </Center>
    </Box>
  );
}
