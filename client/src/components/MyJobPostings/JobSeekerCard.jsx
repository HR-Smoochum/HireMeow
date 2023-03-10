/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import {
  SimpleGrid, Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react';
import axios from 'axios';
import SeekerCard from './SeekerCard.jsx';
import Header from '../Header/Header.jsx';

// COMPONENT
export default function JobSeekerCard() {
  const [interested, setInterested] = useState([]);// store interested seekers id array
  const [veryInterested, setVeryInterested] = useState([]);
  const [extremelyInterested, setExtremelyInterested] = useState([]);

  const [interestedSeekers, setInterestedSeekers] = useState([]);// store interested seekers
  const [veryInterestedSeekers, setVeryInterestedSeekers] = useState([]);
  const [extremelyInterestedSeekers, setExtremelyInterestedSeekers] = useState([]);

  const getAllSeekersId = () => {
    const uid = 1;
    axios.get(`http://localhost:3000/employers/${uid}`).then((results) => {
      // console.log('get employer info', results.data);
      if (results.data.length !== 0) {
        setInterested(results.data[0].saved.interested);
        setVeryInterested(results.data[0].saved.veryInterested);
        setExtremelyInterested(results.data[0].saved.extremelyInterested);
      }
    }).catch((err) => {
      console.error('get seeker from db err', err);
    });
  };
  useEffect(() => {
    getAllSeekersId();
  }, []);

  const axiosFunc = (arr) => {
    // console.log('arr', arr);
    return axios.get('http://localhost:3000/seekersByIdArray', { params: { ids: arr } });
  };
  const getAllSeekers = async () => {
    const iSeekers = await axiosFunc(interested);
    setInterestedSeekers(iSeekers.data);

    const vSeekers = await axiosFunc(veryInterested);
    setVeryInterestedSeekers(vSeekers.data);

    const eSeekers = await axiosFunc(extremelyInterested);
    setExtremelyInterestedSeekers(eSeekers.data);
  };
  useEffect(() => {
    getAllSeekers();
  }, [interested, veryInterested, extremelyInterested]);

  const handleInterested = (e, seekId) => {
    // update seekers's interested level
    const url = 'http://localhost:3000/seekerInterested';
    axios.put(url, { uid: 1, id: seekId, level: e.target.value }).then((results) => {
      getAllSeekersId();
      getAllSeekers();
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
        </TabList>
        <TabPanels p="2rem">
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                interestedSeekers.map(((seeker, index) => {
                  return <SeekerCard seeker={seeker} key={index} handleInterested={handleInterested} />;
                }
                ))
              }
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                veryInterestedSeekers.map(((seeker, index) => {
                  return <SeekerCard seeker={seeker} key={index} handleInterested={handleInterested} />;
                }
                ))
              }
            </SimpleGrid>

          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {
                extremelyInterestedSeekers.map(((seeker, index) => {
                  return <SeekerCard seeker={seeker} key={index} handleInterested={handleInterested} />;
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
