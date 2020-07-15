import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer, LoginContent } from './style';
import { Button, TextField, Title } from '@involves/violin';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    history.push('/dashboard');
  }

  return (
    <LoginContainer>
      <LoginContent>
        <Title size='h3'> Login page </Title>

        <form onSubmit={handleLogin}>
          <TextField
            type='email'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            type='password'
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button label='Sign In' type='submit' primary>
            Login
          </Button>
        </form>
      </LoginContent>
    </LoginContainer>
  );
}
