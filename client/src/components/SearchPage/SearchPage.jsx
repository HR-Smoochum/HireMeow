// LIBRARY IMPORTS
import React from 'react';
import { HStack, Box } from '@chakra-ui/react';

// LOCAL IMPORTS
import FilterPanel from './FilterPanel.jsx';
import ResultList from './ResultList.jsx';
import Header from '../Header/Header.jsx';

// COMPONENT
function SearchPage() {
  return (
    <>
      <Header />
      <Box m="1rem" bg="green.100">
        <HStack>
          <FilterPanel />
          <ResultList />
        </HStack>
      </Box>
    </>
  );
}

export default SearchPage;
