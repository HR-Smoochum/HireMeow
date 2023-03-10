/* eslint-disable import/no-extraneous-dependencies */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Card, CardBody, Button, Alert, Radio, RadioGroup, Stack, Heading, Center,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Header from '../Header/Header.jsx';

// LOCAL IMPORTS

// COMPONENT
function Signup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [industry, setIndustry] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [user, setUser] = useState('seeker');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const navigate = useNavigate();

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
    // console.log(currentUser.uid);
    navigate('/login');
  }

  return (
    <>
      <Header />
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
              <Input type="email" id="1" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <FormLabel>First Name</FormLabel>
              <Input type="text" id="2" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <FormLabel>Last Name</FormLabel>
              <Input type="text" id="3" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <FormLabel>Industry</FormLabel>
              <Input type="text" id="4" value={industry} onChange={(e) => setIndustry(e.target.value)} required />
              <FormLabel>Password</FormLabel>
              <Input type="password" id="5" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" id="6" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
              <Center p={4}>
                <RadioGroup onChange={setUser} value={user}>
                  <Stack direction="row">
                    <Radio value="seeker">Job Seeker</Radio>
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
    </>
  );
}

export default Signup;
