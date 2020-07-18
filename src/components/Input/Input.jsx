import React from 'react';
import { TextField } from '@involves/violin';
import { TextFieldContainer } from './style';

export class Input extends React.Component {
  render() {
    return (
      <>
        <TextFieldContainer>
          <TextField {...this.props} />
        </TextFieldContainer>
      </>
    );
  }
}

export default Input;
