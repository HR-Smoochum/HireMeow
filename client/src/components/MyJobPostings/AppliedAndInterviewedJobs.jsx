/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Image, Box, IconButton, Center,
} from '@chakra-ui/react';
import { HiChevronDoubleDown } from 'react-icons/hi2';
import JobDetail from './JobDetail.jsx';

export default function AppliedAndInterviewedJobs({ Job }) {
  const [showMore, setShowMore] = useState(0);

  const handleDetail = () => {
    setShowMore(1);
  };

  return (
    <>
      {
        showMore === 0 && (
          <Box>
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
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with the speed
                  of design. I wanted the developer to be just as excited as the designer to
                  create a screen.
                </Text>
                <Center>
                  <IconButton aria-label="show more" icon={<HiChevronDoubleDown />} variant="ghost" onClick={handleDetail} />
                </Center>
              </CardBody>
            </Card>
          </Box>
        )
      }
      {
        showMore === 1 && <JobDetail Job={Job} setShowMore={setShowMore} />
      }
    </>
  );
}
