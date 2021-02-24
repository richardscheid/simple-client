import styled from 'styled-components';
import {
  IconButton as CoreIconButton,
  AppBar as CoreAppBar,
  Box as CoreBox,
} from '@material-ui/core';

export const AppBar = styled(CoreAppBar)`
  height: var(--header-height);
  display: flex;
  flex-direction: row;
`;

export const Box = styled(CoreBox)`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-left: var(--spacer);
  padding-right: var(--spacer);

  .btn-inverse:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`;

export const HeaderIconButton = styled(CoreIconButton)`
  padding: var(--spacer) / 2;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const HeaderImage = styled.img`
  width: 28px;
  height: 28px;
`;
