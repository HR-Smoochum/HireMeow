// 1. Import `extendTheme`
import React from 'react';
import TestDiv from './Test1.jsx';
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'


// 2. Call `extendTheme` and pass your custom values
const App = ()=>{
  const theme = extendTheme({
    colors: {
      brand: {
        black: "#14080E",
        purple: "#49475B",
        teal: "#799496",
        green: "#ACC196",
        yellow: "#E9EB9E",
        light: '#fff7ef'
      }
    },
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Barlow', sans-serif`,
      
    }
  })
  
  // 3. Pass the new theme to `ChakraProvider`
  return(
    <ChakraProvider theme={theme}>
      <TestDiv />
    </ChakraProvider>
  );
};

export default App;
