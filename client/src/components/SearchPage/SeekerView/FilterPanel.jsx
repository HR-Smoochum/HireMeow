// LIBRARY IMPORTS
import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';

// LOCAL IMPORTS
import { environmentList, experienceList, employmentList } from '../filterValues.js';
import CheckboxList from '../CheckboxList.jsx';
import SalarySlider from '../Slider.jsx';

// COMPONENT
function FilterPanel({
  handleExperienceChecked, handleEmploymentChecked, handleEnvironmentChecked, handleChangeSalary,
}) {
  return (
    <VStack align="flex-start">
      <Heading as="h4" size="sm">Experience Level</Heading>
      <CheckboxList options={experienceList} handleChecked={handleExperienceChecked} />
      <Heading as="h4" size="sm">Type of Employment</Heading>
      <CheckboxList options={employmentList} handleChecked={handleEmploymentChecked} />
      <Heading as="h4" size="sm">Work Environment</Heading>
      <CheckboxList options={environmentList} handleChecked={handleEnvironmentChecked} />
      <Heading as="h4" size="sm">Salary</Heading>
      <SalarySlider changeSalary={handleChangeSalary} />
    </VStack>
  );
}

export default FilterPanel;
