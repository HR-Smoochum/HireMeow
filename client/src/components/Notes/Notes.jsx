// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import NoteCard from './NoteCard.jsx';
import NewNote from './NewNote.jsx';
// COMPONENT
function Notes() {
  const [currentNoteTitle, setCurrentNoteTitle] = useState('');
  const [currentNote, setCurrentNote] = useState({
    title: 'Pro Tips',
    description: 'make sure to come prepared with all of the relevant information',
  });
  const [noteList, setNoteList] = useState([
    {
      title: 'Pro Tips',
      description: 'make sure to come prepared with all of the relevant information',
    },
    {
      title: 'Best Practices',
      description: 'this is a great place to do really great work. Always try to make sure they know that you really care about working at their company',
    },
    {
      title: 'Skills',
      description: 'really smart obviously and also really into chasing birds',
    },
    {
      title: 'Key Contacts',
      description: 'Mrs. Meowinson, 552-555-2244, meowinson@meows.com',
    },
  ]);

  const handleNote = (e) => {
    e.preventDefault();
    setCurrentNoteTitle(e.target.textContent);
    noteList.forEach((note) => {
      if (note.title === currentNoteTitle) {
        setCurrentNote({
          title: currentNoteTitle,
          description: note.description,
        });
      }
    });
  };

  const handleNewNote = (content) => {
    const newTitle = content.split('\n')[0];
    const newDescription = content.split('\n')[1];
    const newNote = {
      title: newTitle,
      description: newDescription,
    };
    setNoteList([...noteList, newNote]);
  };

  return (
    <div className="notesComponent">
      <div className="notesTitle">My Notes</div>
      <div className="notesListContainer">
        <div className="notesList">
          {noteList.length > 0
            ? noteList.map((note, i) => {
              return <NoteCard note={note} key={i} handleNote={handleNote} />;
            }) : null}
        </div>
        <div className="currentNote">
          <div className="currentNoteTitle">{currentNote.title}</div>
          <div className="currentNoteDescription">{currentNote.description}</div>
        </div>
      </div>
      <NewNote handleNewNote={handleNewNote} />
    </div>
  );
}

export default Notes;
