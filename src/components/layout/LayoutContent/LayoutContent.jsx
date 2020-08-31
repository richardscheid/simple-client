import React from 'react';
import { StyledMain, Div } from './style';

const LayoutContent = (props) => {
  return (
    <StyledMain>
      <Div {...props} />
    </StyledMain>
  );
};

export { LayoutContent };
