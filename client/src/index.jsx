/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom'; // idk how to fix this <--- it just needs to reload, it takes a minute to realize things are used/imported properly, you don't need to disable the rule
import { createRoot } from 'react-dom/client';
import AppHolder from './components/AppHolder.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppHolder />);
