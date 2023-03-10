// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Box, RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import { IoMdPaw } from 'react-icons/io';

// LOCAL IMPORTS

// COMPONENT
function SalarySlider({ changeSalary }) {
  return (
    <RangeSlider onChangeEnd={changeSalary} defaultValue={[30, 80]}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="brand.teal" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0}>
        <Box color="brand.teal" as={IoMdPaw} />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={1}>
        <Box color="brand.teal" as={IoMdPaw} />
      </RangeSliderThumb>
    </RangeSlider>
  );
}

export default SalarySlider;
