/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/contexts/AuthContext';

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button type="button" onClick={handleLogout}>Log Out</Button>
  );
}
