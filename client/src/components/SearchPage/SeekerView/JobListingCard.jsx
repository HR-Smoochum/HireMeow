/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Image, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Center,
} from '@chakra-ui/react';
import { HiEllipsisVertical, HiChevronDoubleDown } from 'react-icons/hi2';
import { IoMdPaw } from 'react-icons/io';
// import JobDetail from './JobDetail.jsx';

function JobCard({
  job, handleInterested,
}) {
  // const [showMore, setShowMore] = useState(0);

  // const handleDetail = () => {
  //   setShowMore(1);
  // };

  return (
    <Box>
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="8">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Image
                borderRadius="full"
                boxSize="50px"
                src={job.logo}
                alt="company logo"
              />
              <Box>
                <Heading size="sm">{job.company}</Heading>
                <Text>{job.title}</Text>
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
                <MenuItem value="interested">
                  <Icon as={IoMdPaw} color="brand.yellow" mr="3px" />
                  Interested
                </MenuItem>
                <MenuItem value="very interested">
                  <Icon as={IoMdPaw} color="brand.teal" mr="3px" />
                  Very Interested
                </MenuItem>
                <MenuItem value="extremely interested">
                  <Icon as={IoMdPaw} color="brand.purple" mr="3px" />
                  Extremely Interested
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            {job.description.substring(0, 100)}
          </Text>
          <Center>
            <IconButton aria-label="show more" icon={<HiChevronDoubleDown />} variant="ghost" />
          </Center>
        </CardBody>
      </Card>
    </Box>
  );
}

export default JobCard;