import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';

export default function Options({ mode, firstName }) {
  const salutation = `Welcome, ${firstName}!`;

  if (mode !== 'guest') {
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
  firstName: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['employer', 'seeker', 'guest']).isRequired,
};
