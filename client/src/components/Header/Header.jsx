import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  MenuDivider,
} from '@chakra-ui/react';
import Navigation from './Navigation.jsx';
import Notifications from './Notifications.jsx';

export default function Header() {
  const user = {
    type: 'employer',
    firstName: 'Donna',
    lastName: 'Wong',
  };

  const firstName = user ? user.firstName : 'Guest';
  const salutation = `Welcome, ${firstName}!`;

  return (
    <Flex p="30" alignItems="center">
      <Box>
        <Heading size="md">Job Site</Heading>
      </Box>
      <Spacer />
      <Flex gap="2">
        <Menu>
          <MenuButton as={Button}>
            <AiOutlineMenu />
          </MenuButton>
          <Navigation user={user} />
        </Menu>
        { user.type !== 'guest' ? <Notifications /> : null }
        <Menu>
          <MenuButton as={Button}>
            <CgProfile />
          </MenuButton>
          <MenuList>
            <MenuItem>{ salutation }</MenuItem>
            <MenuDivider />
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
