import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoNotificationsSharp } from 'react-icons/io5';
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

export default function Header() {
  const notifications = ['interview in one hour'];
  // const user = {
  //   firstName: 'Donna',
  //   lastName: 'Wong',
  // };

  const user = undefined;
  const userState = 'guest';
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
          <Navigation userState={userState} />
        </Menu>
        <Menu>
          <MenuButton as={Button}>
            <IoNotificationsSharp />
          </MenuButton>
          <MenuList>
            { notifications.length === 0 ? <MenuItem>No New Notifications</MenuItem> : notifications.map((notification) => (
              <MenuItem key={notification}>{ notification }</MenuItem>
            ))}
          </MenuList>
        </Menu>
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
