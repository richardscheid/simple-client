import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';
import { BoxTitle, SidebarHeaderContent, Image } from './style';
import { BoxLogo, IconButton } from '../../../../../components';

const SidebarHeader = (props) => {
  return (
    <>
      <SidebarHeaderContent>
        <BoxLogo>
          <Link to="/dashboard">
            <IconButton color="primary" size="small">
              <Image src={logo} alt="Project logo" />
            </IconButton>
          </Link>
          <BoxTitle>Simple</BoxTitle>
        </BoxLogo>
      </SidebarHeaderContent>
    </>
  );
};

export { SidebarHeader };
