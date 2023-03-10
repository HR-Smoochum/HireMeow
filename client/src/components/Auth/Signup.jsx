/* eslint-disable import/no-extraneous-dependencies */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  FormControl, FormLabel, FormHelperText, Input, Card, CardBody, Button, Alert, Radio, RadioGroup, Stack, Heading, Center,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// LOCAL IMPORTS
import { useAuth } from './contexts/AuthContext';
import Header from '../Header/Header.jsx';

// COMPONENT
function Signup() {
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
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
      setLoading(false);
      return setError('Failed to create account');
    }
    setLoading(false);
    // post user object to db
    if (currentUser) {
      const { uid } = currentUser;
      const userData = {
        uid,
        first_name: first,
        last_name: last,
        industry,
      };
      if (user === 'seeker') {
        axios.post('/seekers/signup', userData);
      } else if (user === 'employer') {
        axios.post('/employers/signup', userData);
      }
    }
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
              <Input type="email" id="1" value={email} placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} required />
              <FormLabel>First Name</FormLabel>
              <Input type="text" id="2" value={first} onChange={(e) => setFirst(e.target.value)} required />
              <FormLabel>Last Name</FormLabel>
              <Input type="text" id="3" value={last} onChange={(e) => setLast(e.target.value)} required />
              <FormLabel>Industry</FormLabel>
              <Input type="text" id="4" value={industry} placeholder="Ex: Health & Wellness" onChange={(e) => setIndustry(e.target.value)} required />
              <FormLabel>Password</FormLabel>
              <Input type="password" id="5" pattern=".{6,14}" placeholder="Password must be 6-14 characters" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
