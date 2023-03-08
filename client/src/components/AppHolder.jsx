// LIBRARY IMPORTS
import React, { useEffect, useState, useMemo } from 'react';

// LOCAL IMPORTS
import App from './App.jsx';
import * as request from './Utilities/axiosRequests.js';
import JobContext from './Utilities/JobContext.js';
import employersData from './Utilities/sampleEmployerData.js';
import seekersData from './Utilities/sampleSeekerData.js';
import jobListingsData from './Utilities/sampleJobListingData.js';

// COMPONENT
function AppHolder() {
  // STATES
  const [mode, setMode] = useState('employer'); // ['guest', 'seeker', 'employer']
  const [seekerID, setSeekerID] = useState(1);
  const [employerID, setEmployerID] = useState(1);
  const [jobID, setJobID] = useState(1);
  const [seeker, setSeeker] = useState(seekersData[0]);
  const [employer, setEmployer] = useState(employersData[0]);
  const [aJob, setAJob] = useState(jobListingsData[0]);
  const [allJobs, setAllJobs] = useState(jobListingsData);

  // HOOKS
  function getSeeker() {
    return request.get(`/seeker/${seekerID}`)
      .then((response) => setSeeker(response.data))
      .catch((error) => { console.error(error); });
  }
  function getEmployer() {
    return request.get(`/employer/${employerID}`)
      .then((response) => setEmployer(response.data))
      .catch((error) => { console.error(error); });
  }
  function getAJob() {
    return request.get(`/job/${jobID}`)
      .then((response) => setAJob(response.data))
      .catch((error) => { console.error(error); });
  }
  function getAllJobs() {
    return request.get('/jobs')
      .then((response) => setAllJobs(response.data))
      .catch((error) => { console.error(error); });
  }

  const updateAllData = async () => {
    const dataSeeker = await getSeeker();
    const dataEmployer = await getEmployer();
    const dataAJob = await getAJob();
    const dataAllJobs = await getAllJobs();
    setSeeker(dataSeeker);
    setEmployer(dataEmployer);
    setAJob(dataAJob);
    setAllJobs(dataAllJobs);
  };

  // WE'LL KEEP THIS COMMENTED OUT UNTIL OUR SERVER ROUTES + DB ARE UP AND RUNNING
  // useEffect(() => {
  //   updateAllData()
  //     .catch((error) => console.error(error));
  // }, [seekerID, employerID, jobID]);

  const providerValues = useMemo(() => ({
    mode, setMode, seekerID, setSeekerID, employerID, setEmployerID, jobID, setJobID, seeker, setSeeker, employer, setEmployer, aJob, setAJob, allJobs, setAllJobs,
  }), [mode, seekerID, employerID, jobID, seeker, employer, aJob, allJobs]);

  return (
    <div>
      <JobContext.Provider value={providerValues}>
        <App />
      </JobContext.Provider>
    </div>
  );
}

export default AppHolder;
