import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  Image,
  Flex,
  Heading,
  Spacer,
  Menu,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import Navigation from './Navigation.jsx';
import Notifications from './Notifications.jsx';
import Options from './Options.jsx';
import Logo from '../../../dist/logo.png';

export default function Header() {
  const user = {
    type: 'guest',
    firstName: 'Donna',
    lastName: 'Wong',
  };

  return (
    <Flex p="30" alignItems="center" maxHeight="md">
      <Flex alignItems="center">
        <Image src={Logo} alt="logo" objectFit="contain" maxHeight="15%" maxWidth="15%" />
        <Heading size="lg" ml="2">Hire Meow</Heading>
      </Flex>
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
