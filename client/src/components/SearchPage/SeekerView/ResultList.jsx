// LIBRARY IMPORTS
import React, { useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

// LOCAL IMPORTS
import JobCard from './JobListingCard.jsx';
import JobContext from '../../Utilities/JobContext.js';

// COMPONENT
function ResultList({ searchPageList }) {
  // SET STATES/CONSTANTS

  return (
    <SimpleGrid spacing={6} templateColumns="repeat(2, minmax(15rem, 1fr))" bg="brand.green">
      {
        searchPageList.map(((job) => {
          return <JobCard job={job} key={job.id} />;
        }
        ))
      }
    </SimpleGrid>
  );
}

export default ResultList;
