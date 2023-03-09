// LIBRARY IMPORTS
import React from 'react';
import { Stack, Checkbox, CheckboxGroup, useCheckboxGroup } from '@chakra-ui/react';

// LOCAL IMPORTS
import CustomCheckbox from './CustomCheckbox.jsx';

// COMPONENT
function CheckboxList({ options }) {
  const { value, getCheckboxProps } = useCheckboxGroup();

  // <CheckboxGroup colorScheme="green">
  //   <VStack spacing={[1, 5]} direction={['column', 'row']}>
  //   {options.map(({ label, id, value }) => (
  //     <Checkbox>{label}</Checkbox>
  //   ))}
  //   </VStack>
  // </CheckboxGroup>

  return (
    <Stack>
      {options.map(({ label, id, value }) => (
        <CustomCheckbox key={id} {...getCheckboxProps({ value: value })} />
      ))}
    </Stack>
  );
}

export default CheckboxList;
