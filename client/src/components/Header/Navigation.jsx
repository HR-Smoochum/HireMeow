import React from 'react';
import { MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';

export default function Navigation({ user }) {
  const handleClick = (e, path) => {
    e.preventDefault();
    console.log(path);
  };

  if (user.type === 'employer') {
    return (
      <MenuList>
        <MenuItem onClick={(e) => handleClick(e, 'jobs')}>My Seekers</MenuItem>
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
