import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import Form from './Form.jsx';
import JobContext from '../Utilities/JobContext.js';
import modalContext from '../Utilities/modalContext.js';
import calendarContext from '../Utilities/calendarContext.js';
import Header from '../Header/Header.jsx';
import {
  Button, 
} from '@chakra-ui/react';
import dayGridPlugin from '@fullcalendar/daygrid';


// TODO: Button to create event modal, required field to select a job from their 'applied' list from seeker, job title & time

export default function Calendar() {
  const { useModal, dismissModal } = useContext(modalContext);
  const { seeker, employer, mode } = useContext(JobContext);
  const {events, setEvents} = useContext(calendarContext);
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    if (mode === 'seeker') {
      axios.get(`/seekers/${seeker.uid}`)
        .then((res) => {
          console.log(res.data[0].events); 
          setEvents([...res.data[0].events]);
          // return axios.get('/employers')
        })
        .catch((err) => console.log(err))
    }
    if (mode === 'employer') {
      axios.get(`/employers/${employer.uid}`)
        .then((res) => setEvents([...res.data[0].events]))
        .catch((err) => console.log(err));
    }
  }, []);


  const handleCalEvent = () => {
    if (mode === 'seeker') {
      axios.get('/employers')
      .then(res => {
        console.log('these are employers, ', res.data);
        setEmployers(res.data);
        setEvents(res.data.events);
        useModal(<Form dismissModal={dismissModal} appliedIds={seeker.saved.applied} events={events} setEvents={setEvents} employers={res.data} setEmployers={setEmployers} seeker={seeker}/>);
      })
      .catch(err => { throw err; });
    } else if (mode === 'employer') {
      console.log('TODO, make employer component');
    }
  };
  // TODO: if mode is seeker or employer, change calendar appropriately
  return (
    <div>
      <Header />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        aspectRatio={3}
      />
      <Button className='createEvent' onClick={handleCalEvent}>Schedule Interview</Button>
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};