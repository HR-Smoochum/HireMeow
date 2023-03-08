// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Card, CardBody, Button, Alert,
} from '@chakra-ui/react';
import { useAuth } from './contexts/AuthContext';

// LOCAL IMPORTS

// COMPONENT
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);
  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
    } catch {
      setError('Failed to create account');
    }
    setLoading(false);
  }

  return (
    <Card>
      <CardBody>
        <h1>Sign Up</h1>
        {error && (
          <Alert status="error">{error}</Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" id="1" value={email} onChange={handleEmailChange} required />
            <FormLabel>Password</FormLabel>
            <Input type="password" id="2" value={password} onChange={handlePasswordChange} required />
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" id="3" value={passwordConfirm} onChange={handlePasswordConfirmChange} required />
            <Button disabled={loading} type="submit">Sign Up</Button>
          </FormControl>
        </form>
      </CardBody>
    </Card>
  );
}

export default Signup;
