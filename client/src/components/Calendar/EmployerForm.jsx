import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EmployerForm({
    employer
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

  return (
    <form className="container" onSubmit={(ev) => ev.preventDefault()}>
      <div className="tab">
        <button className="tablinks" onClick={() => setInterestLevel('interested')}>Interested</button>
        <button className="tablinks" onClick={() => setInterestLevel('veryInterested')}>Very Interested</button>
        <button className="tablinks" onClick={() => setInterestLevel('extremelyInterested')}>Extremely Interested</button>
     </div>
      <label>
        Candidates:
        <select name="candidates">
        {applicants[interestlevel]?.map((ele) => <option key={ele.uid}>{`${ele.resume.name}`}</option>)}
        </select>
      </label>
      <label>Schedule a time:</label>

      <input type="datetime-local" name="interviewTime" />

      <button type="submit">Submit</button>
    </form>
  );
}