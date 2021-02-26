import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  IconButton as CoreIconButton,
  AppBar as CoreAppBar,
  Box as CoreBox,
} from '@material-ui/core';

export const AppBarHeader = styled(CoreAppBar)`
  height: var(--header-height);
  display: flex;
  flex-direction: row;
`;

export const BoxHeader = styled(CoreBox)`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: var(--spacer);
  padding-right: var(--spacer);
`;

export const BoxMenu = styled(CoreBox)`
  display: flex;
  align-items: center;
`;

export const BoxText = styled(CoreBox)`
  font-size: var(--font-size-base);
  padding-left: 10px;
  font-weight: bold;
  display: block;
  width: auto;
`;

export const IconButtonHeader = styled(CoreIconButton)`
  padding: var(--spacer) / 2;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;

  /* @include media-breakpoint-up(lg) {
    margin-top: var(--spacer * 2);
  }
  @include media-breakpoint-down(lg) {
    margin-right: var(--spacer);
  } */
`;

export const ImageHeader = styled.img`
  width: 28px;
  height: 28px;
`;
