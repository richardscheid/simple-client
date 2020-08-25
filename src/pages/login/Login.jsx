import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import auth from '../../core/auth';
import { Input, Button } from '../../components';

import {
  StyledLink,
  LoginTitle,
  FormContent,
  LoginContent,
  ButtonContent,
  LoginContainer,
} from './style';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await auth.login({ email, password });
      console.log(result);
      // history.push('/dashboard');
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>
          <h1> Simple </h1>
        </LoginTitle>

        <FormContent>
          <form onSubmit={handleLogin}>
            <Input
              autoFocus
              required
              type='email'
              label='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              required
              type='password'
              label='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <ButtonContent>
              <StyledLink to='/reset'>Forgot password</StyledLink>

              <Button
                type='submit'
                color='primary'
                variant='contained'
                disabled={loading}>
                Sign in
              </Button>
            </ButtonContent>
          </form>
        </FormContent>
      </LoginContent>
    </LoginContainer>
  );
}
