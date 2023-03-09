// LIBRARY IMPORTS
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

// LOCAL IMPORTS
import JobCard from '../Shared/ListCard.jsx';

// COMPONENT
function ResultList({ allJobs }) {
  // SET STATES/CONSTANTS
  console.log('allJobs prop: ', allJobs);
  return (
    <SimpleGrid spacing={6} templateColumns="repeat(2, minmax(15rem, 1fr))" bg="brand.green">
      {
        allJobs.map(((job) => {
          return <JobCard job={job} key={job.id} />;
        }
        ))
      }
    </SimpleGrid>
  );
}

export default ResultList;
