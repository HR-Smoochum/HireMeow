// LIBRARY IMPORTS
import React from 'react';
import { SimpleGrid, useToast } from '@chakra-ui/react';

// LOCAL IMPORTS
import SeekerCard from './JobSeekerCard.jsx';
import { put } from '../../Utilities/axiosRequests.js';

// COMPONENT
function ResultList({ searchPageList }) {
  // SET STATES/CONSTANTS
  const toast = useToast();

  // HANDLE EVENTS
  const handleInterested = (e, employerId, seekId) => {
    // add job to user's saved jobs' list
    put('/jobInterested', { uid: employerId, id: seekId, level: e.target.value })
      .then((results) => {
        console.log('update interested level', results);
        toast({
          title: 'Candidate Saved',
          description: 'See saved candidates in My Seekers',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error('update interested level err', err);
      });
  };

  return (
    <SimpleGrid spacing={6} templateColumns="repeat(2, minmax(15rem, 1fr))" bg="brand.offWhite">
      {
        searchPageList.map(((seeker, index) => {
          return <SeekerCard seeker={seeker} key={index} handleInterested={handleInterested} />;
        }
        ))
      }
    </SimpleGrid>
  );
}

export default ResultList;
