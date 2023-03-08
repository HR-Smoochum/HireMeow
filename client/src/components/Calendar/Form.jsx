import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleEmployerData from '../Utilities/sampleEmployerData';

export default function Form({
  dismissModal, appliedIds, events, setEvents,
}) {
    // console.log('this is form events', events);
  function getMatchingEmployers(appliedIds, employersData) {
    const employerIndustries = [];
    employersData.forEach((employer) => {
      if (appliedIds.includes(employer.id)) {
        employerIndustries.push(employer);
      }
    });
    return employerIndustries;
  }
  const result = getMatchingEmployers(appliedIds, sampleEmployerData);

  const [employer, setEmployer] = useState(result[0]);

  const handleSelection = (e) => {
    setEmployer(result[e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (const [key, val] of new FormData(e.target)) {
      data[key] = val;
    }
    const newEvent = {
      title: `${employer.firstName} ${employer.lastName} ${employer.industry}`,
      start: new Date(data.time)
    };
    // console.log('before setevents', events);
    setEvents([...events, newEvent]);
    // console.log('after setevents', events);
  };

  // TODO: replace mockData with database data
  // TODO: setmultiple events in setEvents
  // TODO (future features): employers should have their own availability, employees get to schedule an interview when employer unlocks their availability to them
  return (
    <form className="container" onSubmit={(e) => { handleSubmit(e); }}>
      <label>
        Applied Jobs:
        <select onChange={handleSelection} name="employer">
          {result.map((ele, i) => <option key={ele.id} value={i}>{`${ele.firstName} ${ele.lastName} ${ele.industry}`}</option>)}
        </select>
      </label>
      <label>
        Available Times:
        <select defaultValue={employer.interviewTimes[0]} name="time">
          {employer.interviewTimes.map((time, i) => <option key={i} value={time}>{time}</option>)}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
