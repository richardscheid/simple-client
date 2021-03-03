import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';
import {
  BoxTitle,
  SidebarHeaderContent,
  Image,
  SidebarHeaderIconButton,
} from './style';
import { BoxLogo } from '../../../../../components';

const SidebarHeader = (props) => {
  return (
    <>
      <SidebarHeaderContent>
        <BoxLogo>
          <Link to="/dashboard">
            <SidebarHeaderIconButton color="primary" size="small">
              <Image src={logo} alt="Project logo" />
            </SidebarHeaderIconButton>
          </Link>
          <BoxTitle>Simple Sidebar Header</BoxTitle>
        </BoxLogo>
      </SidebarHeaderContent>
    </>
  );
};

export { SidebarHeader };
