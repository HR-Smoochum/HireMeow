/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
// LIBRARY IMPORTS
import React, { useState } from 'react';

function NewNote({ handleNewNote }) {
  const [currentContent, setCurrentContent] = useState('');
  const [previousLine, setPreviousLine] = useState('');

  const handleEdit = (e) => {
    setCurrentContent(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      console.log('current ', document.getElementById('resumeEditor').value);
    }
  };

  return (
    <div>
      <div className="newNoteContainer">
        <div className="toolbarContainer">
          <button type="button" className="bold">B</button>
          <button type="button" className="italicize">I</button>
          <button type="button" className="underline">U</button>
          <button type="button" className="bulleted fa-solid fa-list-ul fa-lg" />
          <button type="button" className="numbered fa-solid fa-list-ol fa-lg" />
          <button type="button" className="leftAlign fa-solid fa-align-left fa-lg" />
          <button type="button" className="centerAlign fa-solid fa-align-center fa-lg" />
          <button type="button" className="rightAlign fa-solid fa-align-right fa-lg" />
        </div>
        <textarea id="resumeEditor" rows={5} cols={40} className="editorContentArea" type="text" onKeyDown={handleKeyDown} onChange={handleEdit} />
        <button type="submit" className="createResume" onClick={() => handleNewNote(currentContent)}>Save Note</button>
      </div>
    </div>
  );
}

export default NewNote;
