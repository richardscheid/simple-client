import { Box, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';

const SidebarHeader = (props) => {
  return (
    <>
      <Box>
        <Link to="/dashboard">
          <IconButton color="primary" size="small">
            <img src={logo} alt="Project logo" />
          </IconButton>
        </Link>
      </Box>
    </>
  );
};

export { SidebarHeader };
