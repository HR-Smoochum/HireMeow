import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';

export default function Options({ user }) {
  const firstName = user.type === 'guest' ? 'Guest' : user.firstName;
  const salutation = `Welcome, ${firstName}!`;

  if (user.type !== 'guest') {
    return (
      <MenuList>
        <MenuItem>{ salutation }</MenuItem>
        <MenuDivider />
        <MenuItem>Log Out</MenuItem>
      </MenuList>
    );
  }

  return (
    <MenuList>
      <MenuItem>{ salutation }</MenuItem>
      <MenuDivider />
      <MenuItem>Create an Account</MenuItem>
      <MenuItem>Log In</MenuItem>
    </MenuList>
  );
}

// require specific props when calling options
Options.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    type: PropTypes.oneOf(['employer', 'seeker', 'guest']).isRequired,
  }).isRequired,
};
