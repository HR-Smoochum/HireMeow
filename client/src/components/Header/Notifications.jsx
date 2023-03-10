import React from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import { IoNotificationsSharp } from 'react-icons/io5';

// COMPONENT
function Notifications() {
  const notifications = ['interview in one hour'];

  return (
    <Menu>
      <MenuButton as={Button} onClick={(e) => e.stopPropagation()}>
        <IoNotificationsSharp />
      </MenuButton>
      <MenuList>
        { notifications.length === 0 ? <MenuItem>No New Notifications</MenuItem> : notifications.map((notification) => (
          <MenuItem key={notification}>{ notification }</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default Notifications;
