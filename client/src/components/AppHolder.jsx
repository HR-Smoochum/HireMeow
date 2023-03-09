// LIBRARY IMPORTS
import React, { useEffect, useState, useMemo } from 'react';

// LOCAL IMPORTS
import App from './App.jsx';
import { get } from './Utilities/axiosRequests.js';
import JobContext from './Utilities/JobContext.js';
import Modal from './Shared/Modal.jsx';
import ModalContext from './Utilities/modalContext';
import CalendarContext from './Utilities/calendarContext';

// COMPONENT
function AppHolder() {
  // STATES
  const [mode, setMode] = useState('employer'); // ['guest', 'seeker', 'employer']
  const [seekerID, setSeekerID] = useState(1);
  const [employerID, setEmployerID] = useState(1);
  const [jobID, setJobID] = useState(1);
  const [seekers, setSeekers] = useState([]);

  const [seeker, setSeeker] = useState({});
  const [employer, setEmployer] = useState({});
  const [aJob, setAJob] = useState({});
  const [allJobs, setAllJobs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [events, setEvents] = useState([]);

  // AXIOS REQUESTS
  const getAllSeekers = () => {
    return get('/seekers')
      .then(({ data }) => { setSeekers(data); })
      .catch((err) => { console.error('eror getting all seekers', err); });
  };

  const getSeeker = () => {
    return get(`/seekers/${seekerID}`)
      .then(({ data }) => setSeeker(data))
      .catch((err) => { console.error('error getting seeker', seekerID, err); });
  };

  const getEmployer = () => {
    return get(`/employers/${employerID}`)
      .then(({ data }) => setEmployer(data))
      .catch((err) => { console.error('error getting employer', employerID, err); });
  };

  const getAJob = () => {
    return get(`/jobs/${jobID}`)
      .then(({ data }) => setAJob(data))
      .catch((err) => { console.error('error getting job', jobID, err); });
  };

  const getAllJobs = () => {
    return get('/jobs')
      .then(({ data }) => setAllJobs(data))
      .catch((err) => { console.error('error getting all jobs', err); });
  };

  // updates all the data at load
  useEffect(() => {
    const requests = [
      getAllSeekers(),
      getSeeker(),
      getEmployer(),
      getAJob(),
      getAllJobs(),
    ];

    Promise.all(requests)
      .then(() => { console.log('successfully loaded data'); })
      .catch((err) => { console.log('error updating all data', err); });
  }, []);

  // modal functions
  const useModal = (content) => {
    if (!modalIsOpen) {
      setModalContent(content);
      setModalIsOpen(true);
    } else {
      console.error('Cannot open new modal while another modal is currently open, close the current modal before trying to open a new one');
    }
  };

  const dismissModal = () => {
    setModalIsOpen(false);
  };

  const providerValues = useMemo(() => ({
    mode, setMode, seekers, setSeekers, seekerID, setSeekerID, employerID, setEmployerID, jobID, setJobID, seeker, setSeeker, employer, setEmployer, aJob, setAJob, allJobs, setAllJobs,
  }), [mode, seekers, seekerID, employerID, jobID, seeker, employer, aJob, allJobs]);

  return (
    <div>
      <ModalContext.Provider value={{useModal, dismissModal}}>
        <CalendarContext.Provider value={{events, setEvents}}>
          <JobContext.Provider value={providerValues}>
            <Modal isOpen={modalIsOpen}>
              {modalContent}
            </Modal>
            <App />
          </JobContext.Provider>
        </CalendarContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default AppHolder;
