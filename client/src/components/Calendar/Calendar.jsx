import React, { useContext } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import JobContext from '../Utilities/JobContext.js';
import Header from '../Header/Header.jsx';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Menu,
  MenuButton,
  Button, 
} from '@chakra-ui/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// mockEvent:
// const events = [
//   { title: 'Meeting', start: new Date(), end: new Date() }
// ];

// TODO: Button to create event modal, required field to select a job from their 'applied' list from seeker, job title & time
// After scheduling an event, notification is linked to it
const handleEvent = (e) => {
  e.preventDefault();
};

export default function Calendar() {

  return (
    <div>
      {/* {console.log('this is seeker', seeker)} */}
      <Header />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        // events={events}
        eventContent={renderEventContent}
        aspectRatio={3}
      />
      <Button className='createEvent' onClick={handleEvent}>Create Event</Button>
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
}