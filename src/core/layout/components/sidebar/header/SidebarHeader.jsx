import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';
import { StyledIconButton, StyledSidebarHeader } from './style';

const SidebarHeader = (props) => {
  return (
    <>
      <StyledSidebarHeader>
        <Box>
          <Link to="/dashboard">
            <StyledIconButton color="primary" size="small">
              <img src={logo} alt="Project logo" />
            </StyledIconButton>
          </Link>
        </Box>
      </StyledSidebarHeader>
    </>
  );
};

export { SidebarHeader };
