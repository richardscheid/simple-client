import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';
import { StyledIconButton } from './style';

const SidebarHeader = (props) => {
  return (
    <>
      <Box>
        <Link to="/dashboard">
          <StyledIconButton color="primary" size="small">
            <img src={logo} alt="Project logo" />
          </StyledIconButton>
        </Link>
      </Box>
    </>
  );
};

export { SidebarHeader };
