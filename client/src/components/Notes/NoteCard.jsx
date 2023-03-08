// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS

// COMPONENT
function NoteCard({ note, handleNote}) {
  return (
    <div className="noteContainer">
      <button type="button" className="noteTitle" value={note} onClick={handleNote}>{note.title}</button>
      {/* <div className="noteDescription">{note.description}</div> */}
    </div>
  );
}

export default NoteCard;
