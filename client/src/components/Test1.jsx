import * as React from 'react';
import { Stack, Box, Center, Checkbox } from '@chakra-ui/react';

function TestDiv() {
  return (
    <Center w="100px" h="100px">
      <Box bg="brand.yellow" w="100%" p={4} color="brand.teal">
        This is the Box
        <Stack spacing={5} direction="row">
          <Checkbox isDisabled>Checkbox</Checkbox>
          <Checkbox isDisabled defaultChecked>
            Checkbox
          </Checkbox>
        </Stack>
      </Box>
    </Center>
  );
}

export default TestDiv;
