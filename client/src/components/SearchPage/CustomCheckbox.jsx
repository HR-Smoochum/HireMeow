// LIBRARY IMPORTS
import React from 'react';
import { Flex, Text, Box, useCheckbox } from '@chakra-ui/react';

// MAIN
function CustomCheckbox(props) {
  const {
    state, getCheckboxProps, getInputProps, getLabelProps, htmlProps,
  } = useCheckbox(props);
  const customStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // gridColumnGap: {2},
    maxW: "40",
    bg: "brand.teal",
    border: "1px solid",
    borderColor: "green.500",
    rounded: "lg",
    // px={3},
    // py={1},
    cursor: "pointer",
  };

  return (
    <Box { ...customStyles } {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="brand.yellow"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="brand.yellow" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>{props.value}</Text>
    </Box>
  );
}

export default CustomCheckbox;
