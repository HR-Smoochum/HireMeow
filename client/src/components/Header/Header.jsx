import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Menu,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import Navigation from './Navigation.jsx';
import Notifications from './Notifications.jsx';
import Options from './Options.jsx';

export default function Header() {
  const user = {
    type: 'guest',
    firstName: 'Donna',
    lastName: 'Wong',
  };

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
          <Options user={user} />
        </Menu>
      </Flex>
    </Flex>
  );
}
