import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginTitle } from './style';

const Dashboard = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <LoginTitle>
      <h3 size="h3"> Dashboard </h3>
    </LoginTitle>
  );
};

export { Dashboard };
