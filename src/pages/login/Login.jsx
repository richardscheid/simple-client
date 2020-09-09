import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import auth from '../../core/auth';
import { authenticate } from '../../redux';
import { Input, Button } from '../../components';

import {
  StyledLink,
  LoginTitle,
  FormContent,
  LoginContent,
  ButtonContent,
  LoginContainer,
} from './style';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleLogin(e) {
    e.preventDefault();

    let response;
    setLoading(true);

    try {
      response = await auth.login({ email, password });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }

    if (response.auth) {
      dispatch(authenticate(response.token));
      history.push('/dashboard');
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
              type="email"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              required
              type="password"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <ButtonContent>
              <StyledLink to="/reset">Forgot password</StyledLink>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={loading}
              >
                Sign in
              </Button>
            </ButtonContent>
          </form>
        </FormContent>
      </LoginContent>
    </LoginContainer>
  );
};

export { Login };
