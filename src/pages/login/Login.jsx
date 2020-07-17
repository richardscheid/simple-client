import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Title } from '@involves/violin';
import { LoginContainer, LoginContent, FormContent } from './style';

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
        <Title size='h3'> Welcome </Title>

        <FormContent>
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

            <Button type='submit' primary>
              Sign in
            </Button>
          </form>
        </FormContent>
      </LoginContent>
    </LoginContainer>
  );
}
