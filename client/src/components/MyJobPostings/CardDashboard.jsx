/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import {
  SimpleGrid, Tabs, TabList, Tab, TabPanels, TabPanel, Button, Center,
} from '@chakra-ui/react';
import axios from 'axios';
import JobCard from './JobCard.jsx';
import Header from '../Header/Header.jsx';
import AppliedAndInterviewedJobs from './AppliedAndInterviewedJobs.jsx';

// COMPONENT
export default function CardDashboard() {
  // 查询当前job seeker用户的saved参数，找出保存的所有相关的Jobs信息
  const [checked, setChecked] = useState([]);
  const [interested, setInterested] = useState([]);// store interested job id array
  const [veryInterested, setVeryInterested] = useState([]);
  const [extremelyInterested, setExtremelyInterested] = useState([]);
  const [applied, setApplied] = useState([]);
  const [interviewed, setInterviewed] = useState([]);

  const [interestedJobs, setInterestedJobs] = useState([]);// store interested jobs
  const [veryInterestedJobs, setVeryInterestedJobs] = useState([]);
  const [extremelyInterestedJobs, setExtremelyInterestedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [interviewedJobs, setInterviewedJobs] = useState([]);

  const getAllJobsId = () => {
    console.log('here get all saved jobs??');
    const uid = 1;
    axios.get(`http://localhost:3000/seekers/${uid}`).then((results) => {
      console.log('seeker info', results.data);
      setInterested(results.data[0].saved.interested);
      setVeryInterested(results.data[0].saved['very interested']);
      setExtremelyInterested(results.data[0].saved['extremely interested']);
      setApplied(results.data[0].saved.applied);
      setInterviewed(results.data[0].saved['interviewed for']);
    }).catch((err) => {
      console.error('get seeker from db err', err);
    });
  };

  const axiosFunc = (arr) => {
    return axios.get('http://localhost:3000/jobsByIdArray', { params: { ids: arr } });
  };
  const getAllJobs = () => {
    if (interested.length !== 0) {
      axiosFunc(interested).then((results) => {
        setInterestedJobs(results.data);
      }).catch((err) => {
        console.error('get jobs from db err', err);
      });
    }
    if (veryInterested.length !== 0) {
      axiosFunc(veryInterested).then((results) => {
        setVeryInterestedJobs(results.data);
      }).catch((err) => {
        console.error('get jobs from db err', err);
      });
    }
    if (extremelyInterested.length !== 0) {
      axiosFunc(extremelyInterested).then((results) => {
        setExtremelyInterestedJobs(results.data);
      }).catch((err) => {
        console.error('get jobs from db err', err);
      });
    }
    if (applied.length !== 0) {
      axiosFunc(applied).then((results) => {
        setAppliedJobs(results.data);
      }).catch((err) => {
        console.error('get jobs from db err', err);
      });
    }
    if (interviewed.length !== 0) {
      axiosFunc(interviewed).then((results) => {
        setInterviewedJobs(results.data);
      }).catch((err) => {
        console.error('get jobs from db err', err);
      });
    }
  };

  useEffect(() => {
    getAllJobsId();
  }, []);
  useEffect(() => {
    getAllJobs();
  }, [interested, veryInterested, extremelyInterested, applied, interviewed]);

  // console.log('interested', interestedJobs);
  // console.log('very interested', veryInterestedJobs);
  // console.log('extremely interested', extremelyInterestedJobs);
  // console.log('applied', appliedJobs);
  // console.log('interviewed', interviewedJobs);

  const handleCheck = (e) => {
    const temp = new Set();
    checked.forEach((id) => {
      temp.add(id);
    });
    if (temp.has(e.target.id)) {
      temp.delete(e.target.id);
    } else {
      temp.add(e.target.id);
    }
    setChecked(Array.from(temp));
  };
  // console.log('checked', checked);

  const handleApply = () => {
    axios.put('http://localhost:3000/')

  };

  return (
    <>
      <Header />
      <Tabs isFitted variant="unstyled">
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Interested</Tab>
          <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Very Interested</Tab>
          <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Extremely Interested</Tab>
          <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Applied To</Tab>
          <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Interviewed At</Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                interestedJobs.map(((Job, index) => {
                  return <JobCard Job={Job} key={index} handleCheck={handleCheck} />;
                }
                ))
              }
            </SimpleGrid>
            {
              checked.length !== 0 && <Center><Button mt="30px" bg="brand.green" color="white" onClick={handleApply}> Apply</Button></Center>
            }
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                veryInterestedJobs.map(((Job, index) => {
                  return <JobCard Job={Job} key={index} handleCheck={handleCheck} />;
                }
                ))
              }
            </SimpleGrid>
            {
              checked.length !== 0 && <Center><Button mt="30px" bg="brand.green" color="white" onClick={handleApply}> Apply</Button></Center>
            }
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                extremelyInterestedJobs.map(((Job, index) => {
                  return <JobCard Job={Job} key={index} handleCheck={handleCheck} />;
                }
                ))
              }
            </SimpleGrid>
            {
              checked.length !== 0 && <Center><Button mt="30px" bg="brand.green" color="white" onClick={handleApply}> Apply</Button></Center>
            }
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                appliedJobs.map(((Job, index) => {
                  return <AppliedAndInterviewedJobs Job={Job} key={index} />;
                }
                ))
              }
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
              interviewedJobs.map(((Job, index) => {
                return <AppliedAndInterviewedJobs Job={Job} key={index} />;
              }
              ))
            }
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>

  );
}

// note on purpose: page to render sets of cards (Interested, Very Interested, Applied to, etc)
