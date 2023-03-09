// LIBRARY IMPORTS
import React, { useState } from 'react';
import { HStack, Box } from '@chakra-ui/react';

// LOCAL IMPORTS
import Header from '../Header/Header.jsx';
import FilterPanel from './FilterPanel.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import { environmentList, experienceList, employmentList } from './filterValues.js';
// import Header from '../Header/Header.jsx';

// COMPONENT
function SearchPage() {
  // SET STATES
  const [environment, setEnvironment] = useState(environmentList);
  const [experience, setExperience] = useState(experienceList);
  const [employment, setEmployment] = useState(employmentList);
  const [selectedSalary, setSelectedSalary] = useState([0, 100]);
  const [searchInput, setSearchInput] = useState('');

  return (
    <Box m="1rem" bg="brand.green">
      <Header />
      <SearchBar setSearchInput={setSearchInput} />
      <HStack justify="flex-start">
        <FilterPanel />
        <ResultList />
      </HStack>
    </Box>
  );
}

export default SearchPage;
