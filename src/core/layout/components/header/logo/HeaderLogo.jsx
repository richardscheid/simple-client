import React from 'react';

import logo from '../../../../../assets/images/react.svg';
import { LogoHeaderContent, IconButton, BoxTitle, Image, Link } from './style';
import { BoxLogo } from '../../../../../components';

const HeaderLogo = () => {
  return (
    <>
      <LogoHeaderContent>
        <BoxLogo>
          <Link to="/dashboard">
            <IconButton color="primary" size="small">
              <Image src={logo} alt="Project logo" />
            </IconButton>
          </Link>
          <BoxTitle>Simple Header Logo</BoxTitle>
        </BoxLogo>
      </LogoHeaderContent>
    </>
  );
};

export { HeaderLogo };
