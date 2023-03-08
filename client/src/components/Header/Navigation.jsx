import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Navigation({ user }) {
  const navigate = useNavigate();
  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  if (user.type === 'employer') {
    return (
      <MenuList>
        <MenuItem onClick={(e) => handleClick(e, 'seekers')}>My Seekers</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, 'notes')}>My Notes</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, 'calendar')}>My Calendar</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleClick(e, 'blog')}>Blog</MenuItem>
      </MenuList>
    );
  }

  if (user.type === 'seeker') {
    return (
      <MenuList>
        <MenuItem onClick={(e) => handleClick(e, 'jobs')}>My Jobs</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, 'notes')}>My Notes</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, 'calendar')}>My Calendar</MenuItem>
        <MenuItem onClick={(e) => handleClick(e, 'resume')}>My Resume</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleClick(e, 'blog')}>Blog</MenuItem>
      </MenuList>
    );
  }

  return (
    <MenuList>
      <MenuItem onClick={(e) => handleClick(e, 'blog')}>Blog</MenuItem>
    </MenuList>
  );
}

// require specific props when calling navigation
Navigation.propTypes = {
  user: PropTypes.shape({
    type: PropTypes.oneOf(['employer', 'seeker', 'guest']).isRequired,
  }).isRequired,
};
