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
      .then((res) => setEvents(res.data.events))
      .catch((err) => console.log(err));
  };
  return (
    <form className="container" onSubmit={(e) => { handleSubmit(e); }}>
      <label>
        Applied Jobs:
        <select onChange={handleSelection} name="employer">
          {appliedEmployers.map((ele, i) => <option key={ele.id}>{`${ele.first_name} ${ele.last_name}`}</option>)}
        </select>
      </label>
      <label>Schedule a time:</label>

      <input type="datetime-local" name="interviewTime" />

      <button type="submit">Submit</button>
    </form>
  );
}
