import React from 'react';

import { StyledButton } from './style';

const Button = (props) => {
  return <StyledButton variant="contained" {...props} />;
};

export { Button };
