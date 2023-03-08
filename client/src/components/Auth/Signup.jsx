/* eslint-disable import/no-extraneous-dependencies */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Card, CardBody, Button, Alert, Radio, RadioGroup, Stack, Heading, Center,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// LOCAL IMPORTS

// COMPONENT
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('jobSeeker');
  const { signup } = useAuth();
  const navigate = useNavigate();

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
    navigate('/login');
  }

  return (
    <Card maxW="500px" margin="auto">
      <CardBody>
        <Center>
          <Heading as="h1" size="xl">Sign Up</Heading>
        </Center>
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
            <Center p={4}>
              <RadioGroup onChange={setUser} value={user}>
                <Stack direction="row">
                  <Radio value="jobSeeker">Job Seeker</Radio>
                  <Radio value="employer">Employer</Radio>
                </Stack>
              </RadioGroup>
            </Center>
            <Center>
              <Button disabled={loading} type="submit">Sign Up</Button>
            </Center>
          </FormControl>
        </form>
        <Center p={4}>
          <div>
            Already have an account?
            {' '}
            <Link to="/login">Log in here</Link>
          </div>
        </Center>
      </CardBody>
    </Card>
  );
}

export default Signup;
