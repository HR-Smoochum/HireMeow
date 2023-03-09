import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, MenuDivider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Navigation({ mode }) {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  if (mode === 'employer') {
    return (
      <>
        <MenuItem onClick={(e) => handleClick(e, '/search')}>All Seekers</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleClick(e, '/myseekers')}>My Seekers</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, '/notes')}>My Notes</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, '/calendar')}>My Calendar</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleClick(e, '/blog')}>Blog</MenuItem>
      </>
    );
  }

  if (mode === 'seeker') {
    return (
      <>
        <MenuItem onClick={(e) => handleClick(e, '/search')}>All Jobs</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleClick(e, '/myjobs')}>My Jobs</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, '/notes')}>My Notes</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, '/calendar')}>My Calendar</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, '/resume')}>My Resume</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleClick(e, '/blog')}>Blog</MenuItem>
      </>
    );
  }

  return (
    <>
      <MenuItem onClick={(e) => handleClick(e, '/search')}>All Jobs</MenuItem>
      <MenuDivider />
      <MenuItem onClick={(e) => handleClick(e, '/blog')}>Blog</MenuItem>
    </>
  );
}

// require specific props when calling navigation
Navigation.propTypes = {
  mode: PropTypes.oneOf(['employer', 'seeker', 'guest']).isRequired,
};
