// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS

// COMPONENT
function NoteCard({ note, handleNote }) {
  return (
    <div className="noteContainer" onClick={handleNote}>
      <button type="button" className="noteTitle" value={note}>{note.title}</button>
    </div>
  );
}

export default NoteCard;
