import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate, unauthenticate } from '../../redux';

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

  const dispatch = useDispatch();

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await auth.login({ email, password });

      if (response.auth) {
        localStorage.setItem('token', response.token);
        dispatch(authenticate(response.token));
      }
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
