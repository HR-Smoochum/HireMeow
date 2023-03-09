// LIBRARY IMPORTS
import React from 'react';
import { VStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';

// COMPONENT
function CheckboxList({ options, handleChecked }) {
  return (
    <CheckboxGroup colorScheme="green">
      <VStack spacing={[1, 5]} direction={['column', 'row']}>
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
