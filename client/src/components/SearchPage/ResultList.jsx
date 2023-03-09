// LIBRARY IMPORTS
import React, { useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

// LOCAL IMPORTS
import JobContext from '../Utilities/JobContext.js';
import JobCard from '../Shared/ListCard.jsx';

// COMPONENT
function ResultList() {
  // SET STATES/CONSTANTS
  const { allJobs } = useContext(JobContext);

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
