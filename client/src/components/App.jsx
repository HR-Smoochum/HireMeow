// LIBRARY IMPORTS
import React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// LOCAL IMPORTS
import Header from './Header/Header.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/CreateAccount.jsx';
import SearchPage from './SearchPage/SearchPage.jsx';
import Notes from './Notes/Notes.jsx';
import Calendar from './Calendar/Calendar.jsx';
import Blog from './Blog/Blog.jsx';
import Resume from './Resume/Resume.jsx';

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
      <Router>
        <Routes>
          {/* Default path is to the header => will be removed when everyone adds headers to their components */}
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<SearchPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/seekers" element={<SearchPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;