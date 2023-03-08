// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Image, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon,
} from '@chakra-ui/react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { AiFillHeart } from 'react-icons/ai';

function JobCard({ Job }) {
  const [showMore, setShowMore] = useState(0);
  const handleDetail = () => {
    setShowMore(1);
  };
  return (
    <>
      {
        showMore === 0 && (
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="8">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={Job.logo}
                    alt="company logo"
                  />
                  <Box>
                    <Heading size="sm">{Job.company}</Heading>
                    <Text>{Job.title}</Text>
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
                    <MenuItem>
                      <Icon as={AiFillHeart} style={{ color: '#ffcccc' }} mr="3px" />
                      Interested
                    </MenuItem>
                    <MenuItem>
                      <Icon as={AiFillHeart} style={{ color: '#ff8080' }} mr="3px" />
                      Very Interested
                    </MenuItem>
                    <MenuItem>
                      <Icon as={AiFillHeart} color="#ff0000" mr="3px" />
                      Extremely Interested
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </CardHeader>
            <CardBody onClick={handleDetail}>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
              </Text>
            </CardBody>
          </Card>
        )
      }
      {
        showMore === 1 && <JobDetail Job={Job} setShowMore={setShowMore} />
      }
    </>
  );
}

export default JobCard;
