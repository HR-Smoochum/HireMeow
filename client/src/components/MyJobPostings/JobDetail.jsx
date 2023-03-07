/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Box, Button,
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
      <Box onClick={() => setShowMore(0)}>
        {Job.description}
      </Box>
      <Button> Apply</Button>

    </Box>
  );
}
