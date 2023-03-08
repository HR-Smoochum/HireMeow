import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleEmployerData from '../Utilities/sampleEmployerData';

export default function Form({dismissModal, appliedIds}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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

  //TODO: replace mockData with database data
  //TODO: employers should have their own availability, employees get to schedule an interview when employer unlocks their availability to them
  return (
    <form onSubmit={(e)=> {handleSubmit(e, button)}} style={{border: '1px solid black'}}>
      <label>
        Applied Jobs:
        <select>
          {result.map((ele) => <option key={ele.id}>{`${ele.firstName} ${ele.lastName} ${ele.industry}`}</option>)}
        </select>
      </label>
      <label>
        Available Times:
        <select>
          {result.map((ele) => <option key={ele.id}>{ele.interviewTimes}</option>)}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
