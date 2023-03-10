import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form({
  dismissModal, appliedIds, events, setEvents, employers, setEmployers, seeker
}) {
  function getMatchingEmployers(appliedIds, employersData) {
    const employerIndustries = [];
    employersData.forEach((employer) => {
      if (appliedIds.includes(employer.uid)) {
        employerIndustries.push(employer);
      }
    });
    return employerIndustries;
  }
  const appliedEmployers = getMatchingEmployers(appliedIds, employers);
  const [employer, setEmployer] = useState(appliedEmployers[0]);

  const handleSelection = (e) => {
    setEmployer(appliedEmployers[e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (const [key, val] of new FormData(e.target)) {
      data[key] = val;
    }
    console.log('this is data', data);
    axios.put(`seekers/${seeker.uid}`, data)
      .then((res) => {
        return axios.get(`seekers/${seeker.uid}`)
      })
      .then((res) => {setEvents(res.data.events); dismissModal()})
      .catch((err) => console.log(err));
  };
  return (
    <form className="formContainer" onSubmit={(e) => { handleSubmit(e); }}>
      <div className="formContent">
        <div className="formField">
          <div className="fieldLabel">Applied Jobs:</div>
          <select className="fieldInput" onChange={handleSelection} name="employer">
            {appliedEmployers.map((ele) => <option key={ele.uid}>{`${ele.first_name} ${ele.last_name}`}</option>)}
          </select>
        </div>
        <div className="formField">
          <div className="fieldLabel">Schedule a time:</div>
          <input className="fieldInput" type="datetime-local" name="interviewTime" />
        </div>
        <button className="formSubmitButton" type="submit">Submit</button>
      </div>
    </form>
  );
}
