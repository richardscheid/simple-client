import React from 'react';
import { AppBar, Box, Hidden } from '@material-ui/core';

const Header = (props) => {
  return (
    <>
      <AppBar>
        <Box>
          <Hidden>
            <Box>Header</Box>
          </Hidden>
        </Box>
      </AppBar>
    </>
  );
};

export { Header };
