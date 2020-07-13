import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer, LoginForm } from './style';
import { Button, TextField, Title } from '@involves/violin';

import { LayoutContent } from '../../components/layout/LayoutContent';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    history.push('/dashboard');
  }

  return (
    <>
      <LayoutContent>
        <LoginContainer>
          <Title size='h2'> Login page </Title>

          <LoginForm onSubmit={handleLogin}>
            <TextField
              type='email'
              placeholder='Email'
              className='input'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <TextField
              type='password'
              placeholder='Password'
              className='input'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button label='Sign In' type='submit' primary>
              Login
            </Button>
          </LoginForm>
        </LoginContainer>
      </LayoutContent>
    </>
  );
}
