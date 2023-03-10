// LIBRARY IMPORTS
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

// LOCAL IMPORTS
import SeekerCard from './JobSeekerCard.jsx';

// COMPONENT
function ResultList({ searchPageList }) {
  // SET STATES/CONSTANTS

  return (
    <SimpleGrid spacing={6} templateColumns="repeat(2, minmax(15rem, 1fr))" bg="brand.off">
      {
        searchPageList.map(((seeker) => {
          return <SeekerCard seeker={seeker} key={seeker.id} />;
        }
        ))
      }
    </SimpleGrid>
  );
}

export default ResultList;
