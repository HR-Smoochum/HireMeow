/* eslint-disable react/no-array-index-key */
// LIBRARY IMPORTS
import React from 'react';
import {
  SimpleGrid, Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react';
import SeekerCard from './SeekerCard.jsx';

// LOCAL IMPORTS

// COMPONENT
export default function JobSeekerCard() {
  // 查询当前Employer用户的saved参数，找出保存的所有相关的Job Seeker信息
  const InterestedSeeker = [
    {
      uid: 1,
      first_name: 'Elon',
      last_name: 'Musk',
      industry: 'Software Engineer',
      resume: { resume: 'I am looking for a job' },
      notes: [],
      saved: {},
    },
    {
      uid: 2,
      first_name: 'Bill',
      last_name: 'Gates',
      industry: 'Product Manager',
      resume: { resume: 'I am looking for a job' },
      notes: [],
      saved: {},
    },
    {
      uid: 3,
      first_name: 'Eva',
      last_name: 'Chen',
      industry: 'Software Engineer',
      resume: { resume: 'I am looking for a job' },
      notes: [],
      saved: {},
    },
    {
      uid: 4,
      first_name: 'Ava',
      last_name: 'Wong',
      industry: 'Software Engineer',
      resume: { resume: 'I am looking for a job' },
      notes: [],
      saved: {},
    },
    {
      uid: 5,
      first_name: 'Max',
      last_name: 'Zhou',
      industry: 'Software Engineer',
      resume: { resume: 'I am looking for a job' },
      notes: [],
      saved: {},
    },
  ];

  return (

    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Interested</Tab>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Very Interested</Tab>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Extremely Interested</Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>
          <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
            {
              InterestedSeeker.map(((seeker, index) => {
                return <SeekerCard seeker={seeker} key={index} />;
              }
              ))
            }
          </SimpleGrid>
        </TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

// note on purpose: page to render sets of cards (Interested, Very Interested, Applied to, etc)
