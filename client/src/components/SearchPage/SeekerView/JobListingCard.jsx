/* eslint-disable jsx-a11y/label-has-associated-control */
// LIBRARY IMPORTS
import React, { useContext } from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Image, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Center,
} from '@chakra-ui/react';
import { HiEllipsisVertical, HiChevronDoubleDown } from 'react-icons/hi2';
import { IoMdPaw } from 'react-icons/io';

// LOCAL IMPORTS
import JobContext from '../../Utilities/JobContext.js';
// import JobDetail from './JobDetail.jsx';

function JobCard({
  job, handleInterested,
}) {
  // const [showMore, setShowMore] = useState(0);

  // const handleDetail = () => {
  //   setShowMore(1);
  // };
  const { seekerID } = useContext(JobContext);

  return (
    <Box>
      <Card maxW="md" bg="#E7EDE1">
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
                <MenuItem onClick={(e) => handleInterested(e, seekerID, job.id)} value="interested">
                  <Icon as={IoMdPaw} color="brand.yellow" mr="3px" />
                  Interested
                </MenuItem>
                <MenuItem onClick={(e) => handleInterested(e, seekerID, job.id)} value="veryInterested">
                  <Icon as={IoMdPaw} color="brand.teal" mr="3px" />
                  Very Interested
                </MenuItem>
                <MenuItem onClick={(e) => handleInterested(e, seekerID, job.id)} value="extremelyInterested">
                  <Icon as={IoMdPaw} color="brand.purple" mr="3px" />
                  Extremely Interested
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text h="50px">
            {job.description.substring(0, 80)}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default JobCard;
