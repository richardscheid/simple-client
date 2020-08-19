import React, { useState } from 'react';
import auth from '../../services/auth';
import Input from '../../components/Input';
import { useHistory } from 'react-router-dom';
import { Button, Title } from '@involves/violin';
import { LoginTitle } from './style';

export default function Login() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <LoginTitle>
      <Title size='h3'> Dashboard </Title>
    </LoginTitle>
  );
}
