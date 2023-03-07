// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';

// LOCAL IMPORTS

// COMPONENT
function SalarySlider() {
  // STATES
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  return (
    <Slider onChange={(val) => setSliderValue(val)}>
      <SliderMark value={0} {...labelStyles}>
        $0
      </SliderMark>
      <SliderMark value={100} {...labelStyles}>
        $100K
      </SliderMark>
      <SliderMark
        value={sliderValue}
        textAlign="center"
        bg="blue.500"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
      >
        ${sliderValue}K
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default SalarySlider;
