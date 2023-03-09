/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Avatar,
} from '@chakra-ui/react';
import { IoMdPaw } from 'react-icons/io';
import { HiEllipsisVertical } from 'react-icons/hi2';

// Seeker = {
//   uid: 4,
//   first_name: 'Ava',
//   last_name: 'Wong',
//   industry: 'Software Engineer',
//   resume: {},
//   notes: [],
//   saved: {},
// }
function SeekerCard({ seeker }) {
  const handleInterested = (e) => {
    console.log(e.target);
  };

  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="8">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="seeker.resume.name" src={seeker.photo} />
            <Box>
              <Heading size="sm">
                {seeker.first_name}
                &nbsp;
                {seeker.last_name}
              </Heading>
              <Text>{seeker.industry}</Text>
            </Box>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HiEllipsisVertical />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem bg="brand.green" value="interested">
                <Icon as={IoMdPaw} color="brand.yellow" mr="3px" />
                Interested
              </MenuItem>
              <MenuItem onClick={handleInterested} value="very interested">
                <Icon as={IoMdPaw} color="brand.teal" mr="3px" />
                Very Interested
              </MenuItem>
              <MenuItem onClick={handleInterested} value="extremely interested">
                <Icon as={IoMdPaw} color="brand.purple" mr="3px" />
                Extremely Interested
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          {seeker.resume.skills[0]}
        </Text>
        <Text>
          {seeker.resume.skills[1]}
        </Text>
        <Text>
          {seeker.resume.skills[2]}
        </Text>
      </CardBody>
    </Card>
  );
}
export default SeekerCard;
