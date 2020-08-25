import React from 'react';

import { ButtonStyles } from './style';
import { Button as CoreButton } from '@material-ui/core';

function StyledButton(props) {
  const classes = ButtonStyles();

  return <CoreButton InputProps={{ classes }} {...props} />;
}
class Button extends React.Component {
  render() {
    return (
      <>
          <StyledButton
            variant='contained'
            {...this.props}
          />
      </>
    );
  }
}

export default Button;
