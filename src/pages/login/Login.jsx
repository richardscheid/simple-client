import React, { useState } from 'react';
import auth from '../../core/auth';
import Input from '../../components/Input';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
          <h2 size='h3'> Welcome </h2>
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
