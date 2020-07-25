import React, { useState } from 'react';
import Input from '../../components/Input';
import { FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Button, Title } from '@involves/violin';
import {
  LoginContainer,
  LoginContent,
  FormContent,
  LoginTitle,
  ButtonContent,
  StyledLink,
} from './style';

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
            <FiMail />
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
