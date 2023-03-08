// to create a new note
// to create a new post
// to create a new resume
// to create a new interview event on Calendar

// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// LOCAL IMPORTS

// COMPONENT
export default function Modal({ children, isOpen }) {
  return createPortal(
    isOpen && children,
    document.getElementById('modal-portal')
  );
}
