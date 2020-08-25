import React from 'react';

import TextField from '@material-ui/core/TextField';
import { TextFieldContainer, TextFieldStyles } from './style';

function StyledTextField(props) {
  const classes = TextFieldStyles();

  return <TextField InputProps={{ classes }} {...props} />;
}

class Input extends React.Component {
  render() {
    return (
      <>
        <TextFieldContainer>
          <StyledTextField
            fullWidth
            variant='outlined'
            autoComplete='off'
            {...this.props}
          />
        </TextFieldContainer>
      </>
    );
  }
}

export default Input;
