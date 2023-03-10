// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from '../Header/Header.jsx';

// LOCAL IMPORTS
import NoteCard from './NoteCard.jsx';
import NewNote from './NewNote.jsx';
// COMPONENT
function Notes() {
  const [currentNoteTitle, setCurrentNoteTitle] = useState('');
  const [currentNote, setCurrentNote] = useState({
    title: 'Day 1',
    text: 'Polished my resume and cover letter\nMade a list of ornithology job openings and checked their requirements\nSent my resume and cover letter to a few companies',
  });
  const [noteList, setNoteList] = useState([]);

  const getNotes = () => {
    Axios.get('/getNotes')
      .then((res) => {
        setNoteList(res.data.notes);
      })
      .catch((err) => {
        console.log('request to server failed with error ', err);
      });
  };

  const handleNote = (e) => {
    e.preventDefault();
    setCurrentNoteTitle(e.target.textContent);
    noteList.forEach((note) => {
      if (note.title === currentNoteTitle) {
        setCurrentNote({
          title: currentNoteTitle,
          text: note.text,
        });
      }
    });
  };

  const handleNewNote = (content) => {
    const newTitle = content.split('\n')[0];
    const newDescription = content.split('\n')[1];
    const newNote = {
      title: newTitle,
      text: newDescription,
    };
    setNoteList([...noteList, newNote]);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notesComponent">
      <Header title="My Notes"/>
      <div className="noteItemsContainer">
        <div className="notesListContainer">
          <div className="notesListHeader">Notes</div>
          {noteList.length > 0
            ? noteList.map((note, i) => {
              return <NoteCard note={note} key={i} handleNote={handleNote} />;
            }) : null}
        </div>
        <div className="currentCreateNote">
          <div className="currentNote">
            <div className="currentNoteTitle">{currentNote.title}</div>
            <div className="currentNoteDescription">{currentNote.text}</div>
          </div>
          <NewNote handleNewNote={handleNewNote} />
        </div>
      </div>
    </div>
  );
}

export default Notes;
