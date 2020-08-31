import React from 'react';

import TextField from '@material-ui/core/TextField';
import { TextFieldContainer, TextFieldStyles } from './style';

function StyledTextField(props) {
  const classes = TextFieldStyles();

  return <TextField InputProps={{ classes }} {...props} />;
}

const Input = (props) => {
  return (
    <TextFieldContainer>
      <StyledTextField
        fullWidth
        variant='outlined'
        autoComplete='off'
        {...props}
      />
    </TextFieldContainer>
  );
};

export { Input };
