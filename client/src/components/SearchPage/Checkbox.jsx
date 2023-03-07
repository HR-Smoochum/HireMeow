// LIBRARY IMPORTS
import React from 'react';
import { VStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';

// LOCAL IMPORTS

// COMPONENT
function CheckboxList({ options }) {
  return (
    <CheckboxGroup colorScheme="green">
      <VStack spacing={[1, 5]} direction={['column', 'row']}>
        {options.map(({ label, id, value }) => (
          <Checkbox>{label}</Checkbox>
        ))}
      </VStack>
    </CheckboxGroup>
  );
}

export default CheckboxList;
