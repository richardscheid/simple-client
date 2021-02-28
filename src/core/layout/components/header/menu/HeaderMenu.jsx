import React, { useState } from 'react';

import { Avatar, Box, Menu } from '@material-ui/core';
import { Button } from './style';

import avatar from '../../../../../assets/images/avatar.png';

const HeaderMenu = () => {
  const [anchor, setAnchor] = useState(null);

  function handle(event) {
    setAnchor(event.currentTarget);
  }

  function onClose() {
    setAnchor(null);
  }

  return (
    <>
      <Button color="inherit">
        <Box>
          <Avatar sizes={44} src={avatar} alt="Avatar" />
        </Box>
      </Button>

      <Menu anchor />
    </>
  );
};

export { HeaderMenu };
