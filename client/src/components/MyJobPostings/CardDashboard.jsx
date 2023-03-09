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
// import { useNavigate } from 'react-router-dom';

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

  // const navigate = useNavigate();
  const [checkboxes, setCheckboxes] = useState([]);

  const getAllJobsId = () => {
    const uid = 1;
    axios.get(`http://localhost:3000/seekers/${uid}`).then((results) => {
      if (results.data.length !== 0) {
        setInterested(results.data[0].saved.interested);
        setVeryInterested(results.data[0].saved['very interested']);
        setExtremelyInterested(results.data[0].saved['extremely interested']);
        setApplied(results.data[0].saved.applied);
        setInterviewed(results.data[0].saved['interviewed for']);
      }
    }).catch((err) => {
      console.error('get seeker from db err', err);
    });
  };
  useEffect(() => {
    getAllJobsId();
  }, [checked]);

  const axiosFunc = (arr) => {
    return axios.get('http://localhost:3000/jobsByIdArray', { params: { ids: arr } });
  };
  const getAllJobs = () => {
    axiosFunc(interested).then((results) => {
      setInterestedJobs(results.data);
    }).catch((err) => {
      console.error('get jobs from db err', err);
    });
    axiosFunc(veryInterested).then((results) => {
      setVeryInterestedJobs(results.data);
    }).catch((err) => {
      console.error('get jobs from db err', err);
    });
    axiosFunc(extremelyInterested).then((results) => {
      setExtremelyInterestedJobs(results.data);
    }).catch((err) => {
      console.error('get jobs from db err', err);
    });
    axiosFunc(applied).then((results) => {
      setAppliedJobs(results.data);
    }).catch((err) => {
      console.error('get jobs from db err', err);
    });
    axiosFunc(interviewed).then((results) => {
      setInterviewedJobs(results.data);
    }).catch((err) => {
      console.error('get jobs from db err', err);
    });
  };
  useEffect(() => {
    getAllJobs();
  }, [interested, veryInterested, extremelyInterested, applied, interviewed]);

  // console.log('interested Jobs', interestedJobs);
  // console.log('very interested Jobs', veryInterestedJobs);
  // console.log('extremely interested Jobs', extremelyInterestedJobs);
  // console.log('applied', appliedJobs);
  // console.log('interviewed', interviewedJobs);
  // console.log('interested', interested);
  // console.log('very interested', veryInterested);
  // console.log('extremely interested', extremelyInterested);

  const handleCheck = (e) => {
    const idNum = parseInt(e.target.id, 10);
    const temp = new Set();
    checked.forEach((id) => {
      temp.add(id);
    });
    if (temp.has(idNum)) {
      temp.delete(idNum);
    } else {
      temp.add(idNum);
    }
    setChecked(Array.from(temp));

    const temp1 = new Set();
    checkboxes.forEach((item) => {
      temp1.add(item);
    });
    if (temp1.has(e.target)) {
      temp1.delete(e.target);
    } else {
      temp1.add(e.target);
    }
    setCheckboxes(temp1);
  };
  // console.log('checked', checked);
  // console.log('checkboxes', checkboxes);

  const handleApply = () => {
    checkboxes.forEach((item) => {
      item.checked = false;
    });
    axios.put('http://localhost:3000/jobsToApplied', { uid: 1, ids: checked }).then((results) => {
      getAllJobsId();
      getAllJobs();
      setChecked([]);
      // navigate('/jobs');
    }).catch((err) => {
      console.log('change to applied err', err);
    });
  };

  const handleSingleApply = (id) => {
    axios.put('http://localhost:3000/jobsToApplied', { uid: 1, ids: [id] }).then((results) => {
      getAllJobsId();
      getAllJobs();
    }).catch((err) => {
      console.log('change single job to applied err', err);
    });
  };

  const handleInterested = (e, jobId) => {
    // console.log(e.target.value);
    // update job's interested level
    const url = 'http://localhost:3000/jobInterested';
    axios.put(url, { uid: 1, id: jobId, level: e.target.value }).then((results) => {
      console.log('update interested level', results);
      getAllJobsId();
      getAllJobs();
    }).catch((err) => {
      console.error('update interested level err', err);
    });
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
                  return <JobCard Job={Job} key={index} handleCheck={handleCheck} handleSingleApply={handleSingleApply} handleInterested={handleInterested} />;
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
                  return <JobCard Job={Job} key={index} handleCheck={handleCheck} handleSingleApply={handleSingleApply} handleInterested={handleInterested} />;
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
                  return <JobCard Job={Job} key={index} handleCheck={handleCheck} handleSingleApply={handleSingleApply} handleInterested={handleInterested} />;
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
