import React, { useContext, useEffect, useState } from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import { IoNotificationsSharp } from 'react-icons/io5';
import JobContext from '../Utilities/JobContext.js';

// COMPONENT
function Notifications() {
  const { mode, seeker, employer } = useContext(JobContext);
  const [notifications, setNotifications] = useState([]);

  const generateNotifications = (events) => {
    setNotifications(events.map((event) => {
      const upcoming = new Date(event.date);
      const now = new Date();
      const days = (upcoming - now) / (24 * 60 * 60 * 1000);
      return `${event.title} in ${Math.floor(days)} days`;
    }));
  };

  useEffect(() => {
    if (mode === 'seeker') {
      generateNotifications(seeker.events);
    }

    if (mode === 'employer') {
      generateNotifications(employer.events);
    }
  }, [mode, seeker, employer]);

  return (
    <Menu>
      <MenuButton bg="brand.offWhite" as={Button} onClick={(e) => e.stopPropagation()}>
        <IoNotificationsSharp />
      </MenuButton>
      <MenuList>
        { notifications.length === 0 ? <MenuItem>No New Notifications</MenuItem> : notifications.map((notification) => (
          <MenuItem key={notification}>{ notification }</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default Notifications;
