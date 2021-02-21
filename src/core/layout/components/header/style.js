import { AppBar as CoreAppBar, Box } from '@material-ui/core';
import styled from 'styled-components';

export const AppBar = styled(CoreAppBar)`
  height: var(--header-height);
  display: flex;
  flex-direction: row;
`;
