import React from 'react';
import { StyledMain, Div } from './style';

export class LayoutContent extends React.Component {
  render() {
    return (
      <>
        <StyledMain>
          <Div {...this.props} />
        </StyledMain>
      </>
    );
  }
}

export default LayoutContent;
