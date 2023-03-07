// LIBRARY IMPORTS
import React from 'react';
import { VStack, Box, Heading } from '@chakra-ui/react';

// LOCAL IMPORTS
import { environmentList, experienceList, employmentList } from './filterValues.js';
import CheckboxList from './Checkbox.jsx';
import SalarySlider from './Slider.jsx';

// COMPONENT
function FilterPanel() {
  return (
    <Box>
      <VStack>
        <Heading as="h4" size="sm">Experience Level</Heading>
        <CheckboxList options={experienceList} />
        <Heading as="h4" size="sm">Type of Employment</Heading>
        <CheckboxList options={employmentList} />
        <Heading as="h4" size="sm">Work Environment</Heading>
        <CheckboxList options={environmentList} />
        <Heading as="h4" size="sm">Salary</Heading>
        <SalarySlider />
      </VStack>
    </Box>
  );
}

export default FilterPanel;
