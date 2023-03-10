// LIBRARY IMPORTS
import React, { useContext } from 'react';
import { SimpleGrid, useToast } from '@chakra-ui/react';

// LOCAL IMPORTS
import JobCard from './JobListingCard.jsx';
import { put } from '../../Utilities/axiosRequests.js';

// COMPONENT
function ResultList({ searchPageList }) {
  const toast = useToast();

  // HANDLE EVENTS
  const handleInterested = (e, seekerId, jobId) => {
    // add job to user's saved jobs' list
    put('/jobInterested', { uid: seekerId, id: jobId, level: e.target.value })
      .then((results) => {
        console.log('update interested level', results);
        toast({
          title: 'Job Saved',
          description: `Saved in My Jobs as ${e.target.value}`,
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
    <SimpleGrid spacing={6} templateColumns="repeat(2, minmax(15rem, 1fr))" bg="brand.green">
      {
        searchPageList.map(((job) => {
          return <JobCard job={job} key={job.id} handleInterested={handleInterested} />;
        }
        ))
      }
    </SimpleGrid>
  );
}

export default ResultList;
