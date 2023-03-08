// LIBRARY IMPORTS
import React from 'react';
import { extendTheme, ChakraProvider, Container } from '@chakra-ui/react';
import { AuthProvider } from './Auth/contexts/AuthContext';

// LOCAL IMPORTS
import TestDiv from './Test1.jsx';
import Example from './HowToUseContext.jsx';
import Header from './Header/Header.jsx';
import SearchPage from './SearchPage/SearchPage.jsx';
import Signup from './Auth/Signup.jsx';
import Login from './Auth/Login.jsx';

// COMPONENT
function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        black: '#14080E',
        purple: '#49475B',
        teal: '#799496',
        green: '#ACC196',
        yellow: '#E9EB9E',
        light: '#fff7ef',
      },
    },
    fonts: {
      heading: '\'Poppins\', sans-serif',
      body: '\'Barlow\', sans-serif',

    },
  });

  return (
    <ChakraProvider theme={theme}>
      <TestDiv />
      <Example />
    </ChakraProvider>
  );
}

export default App;

/* <AuthProvider>
      <Container>
        <Signup />
        <Login />
      </Container>
    </AuthProvider> */
