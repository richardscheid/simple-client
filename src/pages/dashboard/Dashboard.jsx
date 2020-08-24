import React, { useState } from 'react';
import auth from '../../core/auth';
import Input from '../../components/Input';
import { useHistory } from 'react-router-dom';
import { LoginTitle } from './style';

export default function Login() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <LoginTitle>
      <h3 size='h3'> Dashboard </h3>
    </LoginTitle>
  );
}
