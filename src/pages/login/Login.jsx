import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useAuth from '../../core/auth';
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
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const response = await useAuth.login({ email, password });

    setLoading(false);

    if (response.auth) {
      dispatch(authenticate(response.token));
      history.push('/dashboard');
    }
  }

  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>
          <h1> {t('header.title')} </h1>
        </LoginTitle>

        <FormContent>
          <form onSubmit={handleLogin}>
            <Input
              autoFocus
              required
              type="email"
              label={t('terms.email')}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              required
              type="password"
              label={t('terms.password')}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <ButtonContent>
              <StyledLink to="/reset">{t('terms.forgot')}</StyledLink>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={loading}
              >
                {t('login.signin')}
              </Button>
            </ButtonContent>
          </form>
        </FormContent>
      </LoginContent>
    </LoginContainer>
  );
};

export { Login };
