import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';
import {
  IconButton,
  BoxHeader,
  BoxTitle,
  SidebarHeaderContent,
  Image,
} from './style';

const SidebarHeader = (props) => {
  return (
    <>
      <SidebarHeaderContent>
        <BoxHeader>
          <Link to="/dashboard">
            <IconButton color="primary" size="small">
              <Image src={logo} alt="Project logo" />
            </IconButton>
          </Link>
          <BoxTitle>Simple</BoxTitle>
        </BoxHeader>
      </SidebarHeaderContent>
    </>
  );
};

export { SidebarHeader };
