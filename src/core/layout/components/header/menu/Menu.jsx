import React from 'react';

import { Avatar, Box } from '@material-ui/core';
import { Button } from './style';

import avatar from '../../../../../assets/images/avatar.png';

const Menu = (props) => {
  return (
    <>
      <Button color="inherit">
        <Box>
          <Avatar sizes={44} src={avatar} alt="Avatar" />
        </Box>
      </Button>
    </>
  );
};

export { Menu };
