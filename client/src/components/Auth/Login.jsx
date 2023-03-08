/* eslint-disable import/no-extraneous-dependencies */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Card, CardBody, Button, Alert, Radio, RadioGroup, Stack, Heading, Center,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

// LOCAL IMPORTS
import { useAuth } from './contexts/AuthContext';
import Header from '../Header/Header.jsx';

// COMPONENT
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('jobSeeker');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
    navigate('/jobs');
  }

  return (
    <Card maxW="500px" margin="auto">
      <CardBody>
        <Center>
          <Heading as="h1" size="xl">Log In</Heading>
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
            <Center p={4}>
              <RadioGroup onChange={setUser} value={user}>
                <Stack direction="row">
                  <Radio value="jobSeeker">Job Seeker</Radio>
                  <Radio value="employer">Employer</Radio>
                </Stack>
              </RadioGroup>
            </Center>
            <Center>
              <Button disabled={loading} type="submit">Log In</Button>
            </Center>
          </FormControl>
        </form>
        <Center p={4}>
          <div>
            Need an account?
            {' '}
            <Link to="/signup">Sign up here</Link>
          </div>
        </Center>
      </CardBody>
    </Card>
  );
}

export default Login;
