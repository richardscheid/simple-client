import React, { useState } from 'react';
import Input from '../../components/Input';
import Authentication from '../../services/auth/authentication';
import { useHistory } from 'react-router-dom';
import { Button, Title } from '@involves/violin';
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

  async function handleLogin(e) {
    e.preventDefault();

    const auth = Authentication().login(email, password);

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

            <ButtonContent>
              <StyledLink to='/reset'>Forgot password</StyledLink>

              <Button type='submit' primary>
                Sign in
              </Button>
            </ButtonContent>
          </form>
        </FormContent>
      </LoginContent>
    </LoginContainer>
  );
}
