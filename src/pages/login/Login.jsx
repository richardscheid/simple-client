import React, { useState } from 'react';
import Input from '../../components/Input';
import { useHistory } from 'react-router-dom';
import { Button, Title } from '@involves/violin';
import { LoginContainer, LoginContent, FormContent, LoginTitle } from './style';

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
        <LoginTitle>
          <Title size='h3'> Welcome </Title>
        </LoginTitle>

        <FormContent>
          <form onSubmit={handleLogin}>
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
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
