import React from 'react';

import { StyledButton } from './style';

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
