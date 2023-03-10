import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'

export default function EmployerForm({
    employer, setEvents, events, dismissModal
}) {
  const [interestlevel, setInterestLevel] = useState('interested');
  const [applicants, setApplicants] = useState({});
  
  useEffect(() => {
    axios.get('/seekers')
      .then((res) => {
        const data = res.data;
        const applicantData = {
            extremelyInterested: [],
            interested: [],
            veryInterested: [],
        };
        for (let key in employer.saved) {
            for (let id of employer.saved[key]) {
                const match = res.data.find(applicant => applicant.uid === id);
                if (match) {
                    applicantData[key].push(match);
                }
            }
        }
        setApplicants(applicantData);
      })
      .catch(e => {throw e;})
  }, []);

  const handleSelection = (e) => {
    setCandidate()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (const [key, val] of new FormData(e.target)) {
      data[key] = val;
    }
    axios.put(`employers/${employer.uid}`, data)
      .then(() => {
        return axios.get(`employers/${employer.uid}`)
      })
      .then((res) => { setEvents(res.data.events); dismissModal() })
      .catch((err) => console.log(err));
  };


  return (
    <form className="formContainer" onSubmit={(e) => { handleSubmit(e); }}>
      <div className="tab">
        <button className="tablinks" onClick={(ev) => {ev.preventDefault(); setInterestLevel('interested')}}>Interested</button>
        <button className="tablinks" onClick={(ev) => {ev.preventDefault(); setInterestLevel('veryInterested')}}>Very Interested</button>
        <button className="tablinks" onClick={(ev) => {ev.preventDefault(); setInterestLevel('extremelyInterested')}}>Extremely Interested</button>
     </div>
      <label>
        Candidates:
        <select name="candidate">
        {applicants[interestlevel]?.map((ele) => <option key={ele.uid}>{`${ele.resume.name}`}</option>)}
        </select>
      </label>
      <label>Schedule a time:</label>

      <input type="datetime-local" name="interviewTime" />

      <button type="submit">Submit</button>
    </form>
  );
}