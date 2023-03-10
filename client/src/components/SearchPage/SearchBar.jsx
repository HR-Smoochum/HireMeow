// LIBRARY IMPORTS
import React, { useState } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// LOCAL IMPORTS

// COMPONENT
function SearchBar({ setSearchInput }) {
  // SET STATES
  const [currentInput, setCurrentInput] = useState('');

  // HANDLE EVENTS
  const handleChange = (e) => setCurrentInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(currentInput);
    setCurrentInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        alignItems="center"
        border=".1rem"
        borderStyle="solid"
        borderColor="brand.black"
        borderRadius="1rem"
        bg="brand.lightOff"
        p=".5rem .5rem"
      >
        <Input
          value={currentInput}
          onChange={handleChange}
          variant="unstyled"
          placeholder="Search by job title"
        />
        <IconButton
          color="brand.purple"
          aria-label="Search for job by title"
          bg="brand.light"
          type="submit"
          icon={<SearchIcon />}
        />
      </Flex>
    </form>
  );
}

export default SearchBar;
