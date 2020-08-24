import React from 'react';
import { TextFieldContainer, StyledInput } from './style';

export class Input extends React.Component {
  render() {
    return (
      <>
        <TextFieldContainer>
          <StyledInput variant='outlined' {...this.props} />
        </TextFieldContainer>
      </>
    );
  }
}

export default Input;
