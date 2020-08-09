import React, { useState } from 'react';
import auth from '../../services/auth';
import Input from '../../components/Input';
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
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await auth.login(email, password);

      // history.push('/dashboard');
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
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

              <Button type='submit' primary disabled={loading}>
                Sign in
              </Button>
            </ButtonContent>
          </form>
        </FormContent>
      </LoginContent>
    </LoginContainer>
  );
}
