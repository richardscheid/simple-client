import React from 'react';

import { TextFieldContainer, TextField } from './style';

const Input = (props) => {
  return (
    <TextFieldContainer>
      <TextField fullWidth autoComplete="off" {...props} />
    </TextFieldContainer>
  );
};

export { Input };
