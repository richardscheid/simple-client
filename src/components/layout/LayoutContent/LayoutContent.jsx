import React from 'react';
import { StyledMain, Div } from './style';

const LayoutContent = (props) => (
  <StyledMain>
    <Div {...props} />
  </StyledMain>
);

export default LayoutContent;
