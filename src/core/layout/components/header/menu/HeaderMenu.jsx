import React, { useState } from 'react';

import { Avatar, Box } from '@material-ui/core';
import { Button, Menu } from './style';

import avatar from '../../../../../assets/images/avatar.png';

const HeaderMenu = () => {
  const [anchor, setAnchor] = useState(null);

  function onClick(event) {
    setAnchor(event.currentTarget);
  }

  function onClose() {
    setAnchor(null);
  }

  return (
    <>
      <Button color="inherit" onClick={onClick}>
        <Box>
          <Avatar sizes={44} src={avatar} alt="Avatar" />
        </Box>
      </Button>

      <Menu
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={onClose}
      >
        <Box>
          <Avatar sizes={44} src={avatar} alt="Avatar" />
        </Box>
      </Menu>
    </>
  );
};

export { HeaderMenu };
