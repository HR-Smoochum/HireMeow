import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  Image,
  Flex,
  Heading,
  Spacer,
  Menu,
  MenuList,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Notifications from './Notifications.jsx';
import Options from './Options.jsx';
import Logo from '../../../dist/logo.png';
import JobContext from '../Utilities/JobContext.js';

export default function Header({ title }) {
  const { mode, seeker, employer } = useContext(JobContext);
  const [firstName, setFirstName] = useState('Guest');
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    if (mode === 'seeker' || mode === 'guest') {
      navigate('/alljobs');
    }

    if (mode === 'employer') {
      navigate('/allseekers');
    }
  };

  useEffect(() => {
    if (mode === 'seeker') {
      setFirstName(seeker.first_name);
    }
    if (mode === 'employer') {
      setFirstName(employer.first_name);
    }
  }, [mode, seeker.first_name, employer.first_name]);

  return (
    <Flex flexDirection="column">
      <Flex p="30" alignItems="center" maxHeight="md">
        <Flex alignItems="center" onClick={(e) => handleHome(e)} cursor="pointer">
          <Image src={Logo} alt="logo" objectFit="contain" maxHeight="15%" maxWidth="15%" />
          <Heading size="lg" ml="2">Hire Meow</Heading>
        </Flex>
        <Spacer />
        <Flex gap="2">
          <Menu>
            <MenuButton as={Button} onClick={(e) => e.stopPropagation()}>
              <AiOutlineMenu />
            </MenuButton>
            <MenuList>
              <Navigation mode={mode} />
            </MenuList>
          </Menu>
          { mode !== 'guest' ? <Notifications /> : null }
          <Menu>
            <MenuButton as={Button} onClick={(e) => e.stopPropagation()}>
              <CgProfile />
            </MenuButton>
            <Options mode={mode} firstName={firstName} />
          </Menu>
        </Flex>
      </Flex>
      { title ? <div className="notesContainer">{ title }</div> : null }
    </Flex>

  );
}
