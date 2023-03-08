import React, { useNavigate } from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { useAuth } from '../Auth/contexts/AuthContext.jsx';

export default function Options({ mode, firstName }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const salutation = `Welcome, ${firstName}!`;

  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout()
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  if (mode !== 'guest') {
    return (
      <MenuList>
        <MenuItem>{ salutation }</MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => handleLogout(e)}>Log Out</MenuItem>
      </MenuList>
    );
  }

  return (
    <MenuList>
      <MenuItem>{ salutation }</MenuItem>
      <MenuDivider />
      <MenuItem onClick={(e) => handleNavigate(e, '/signup')}>Create an Account</MenuItem>
      <MenuItem onClick={(e) => handleNavigate(e, '/login')}>Log In</MenuItem>
    </MenuList>
  );
}

// require specific props when calling options
Options.propTypes = {
  firstName: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['employer', 'seeker', 'guest']).isRequired,
};
