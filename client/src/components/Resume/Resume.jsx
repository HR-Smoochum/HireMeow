// LIBRARY IMPORTS
import React, { useState } from 'react';
import Axios from 'axios';
// LOCAL IMPORTS
import Header from '../Header/Header.jsx';

const FormData = require('form-data');

// COMPONENT
function Resume() {
  const [selectedFile, setSelectedFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [resumeImage, setResumeImage] = useState();
  const [resumePresent, setResumePresent] = useState(false);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('name', fileName);

    Axios.post('/resumeData', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(() => {
        Axios.get('/getResume')
          .then(() => {
            setResumePresent(!resumePresent);
          });
      })
      .catch((err) => {
        console.log('upload failed ', err);
      });

    // // TODO: send current user's id in request
    // Axios.get('/getResume')
    //   .then((res) => {
    //     setResumePresent(!resumePresent);
    //   });
  };

  return (
    <div className="uploadResumeContainer">
      <Header />
      <div className="myResumeHeader">Resume</div>
      <div className="resumeInformationContainer">
        <div className="uploadResumeActionContainer">
          <div className="uploadResume">Upload Resume</div>
          <input className="inputResume" type="file" name="uploadResume" accept=".doc,.docx,.pdf" onChange={handleFileUpload} />
          <button type="submit" className="uploadResumeButton" onClick={submitForm}>Upload!</button>
        </div>
        <div className="resumeImageContainer">
          {
          resumePresent ? <iframe className="resumeImage" title="resumeImage" src="http://localhost:3000/getResume" /> : <h1 className="noResume">No Resume Available</h1>
        }
        </div>
      </div>
    </div>
  );
}

export default Resume;
