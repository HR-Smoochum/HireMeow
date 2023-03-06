// To import contexts (e.g. the seeker id or the employer data) to your component
// Follow these steps:

// 1) IMPORT useContext from React
import React, { useContext } from 'react';

// 2) IMPORT THE CREATED CONTEXT, BE SURE TO UPDATE THE RELATIVE PATH
import JobContext from './Utilities/JobContext.js';

function Example() {
  // 3) CALL THE CONTEXTS (which can be states and/or state-setter functions) NEEDED FOR YOUR COMPONENT (these states are all set in AppHolder.jsx As a group can decide what to include there so it can be imported as a context via useContext)
  const { seekerID, seeker, employer, aJob } = useContext(JobContext);

  // 4) YOU NOW CAN ACCESS THE DATA STORED IN THE STATES/THE FUNCTIONS OF THESE STATE SETTERS
  return (
    <div>
      <h2>
        This is how to use the useContext hook. You can display the job seekers name:
      </h2>
      <p>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        Welcome, {seeker.firstName} {seeker.lastName}, your ID is {seekerID}! <br />
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        An Employer you might be interested is: {employer.firstName} {employer.lastName}. <br />
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        A job you might be interested in is: {aJob.title}.
      </p>
    </div>
  );
}

export default Example;
