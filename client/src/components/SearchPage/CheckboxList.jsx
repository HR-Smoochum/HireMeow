// LIBRARY IMPORTS
import React from 'react';
import { VStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';

// COMPONENT
function CheckboxList({ options, handleChecked }) {
  return (
    <CheckboxGroup colorScheme="teal">
      <VStack spacing={[1, 5]} direction={['column', 'row']} alignItems="flex-start">
        {options.map(({ label, id, value }) => (
          <Checkbox
            value={value}
            id={id}
            key={id}
            onChange={() => handleChecked(id)}
          >
            {label}
          </Checkbox>
        ))}
      </VStack>
    </CheckboxGroup>
  );
}

export default CheckboxList;
