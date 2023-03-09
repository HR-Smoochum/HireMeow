import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import Form from './Form.jsx';
import EmployerForm from './EmployerForm.jsx';
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
  const [currEmployer, setCurrEmployer] = useState({});

  useEffect(() => {
    if (mode === 'seeker') {
      axios.get(`/seekers/${seeker.uid}`)
        .then((res) => {
          console.log(res.data[0].events); 
          setEvents([...res.data[0].events]);
          return axios.get('/employers')
        })
        .then((res) => {
          setEmployers(res.data);
        })
        .catch((err) => console.log(err))
    }
    if (mode === 'employer') {
      axios.get(`/employers/${employer.uid}`)
        .then((res) => {
          console.log('this is current employer', res.data[0]);
          setEvents([...res.data[0].events]);
          setCurrEmployer(res.data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, []);


  const handleCalEvent = () => {
    if (mode === 'seeker') {
      useModal(<Form dismissModal={dismissModal} appliedIds={seeker.saved.applied} events={events} setEvents={setEvents} employers={employers} setEmployers={setEmployers} seeker={seeker}/>);
    } else if (mode === 'employer') {
      useModal(<EmployerForm dismissModal={dismissModal} employer={currEmployer} events={events} setEvents={setEvents} />)
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