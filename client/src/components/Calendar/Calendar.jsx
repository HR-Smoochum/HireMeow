import React, { useContext, useState } from 'react';
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

// mockEvent:
// const events = [
//   { title: 'Meeting', start: new Date(), end: new Date() }
// ];

// TODO: Button to create event modal, required field to select a job from their 'applied' list from seeker, job title & time
// After scheduling an event, notification is linked to it

export default function Calendar() {
  const { useModal, dismissModal } = useContext(modalContext);
  const { seeker } = useContext(JobContext);
  const {events, setEvents} = useContext(calendarContext);
  const formComponent = <Form dismissModal={dismissModal} appliedIds={seeker.saved.applied} events={events} setEvents={setEvents} />;


  const handleCalEvent = () => {
    return useModal(formComponent);
  };

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