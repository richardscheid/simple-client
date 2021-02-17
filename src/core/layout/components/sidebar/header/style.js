import styled from 'styled-components';
import { Box, IconButton as CoreIconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const IconButton = withStyles({
  root: {
    width: 16,
    height: 16,
  },
})(CoreIconButton);

export const BoxHeader = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
})(Box);

export const SidebarHeaderContent = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
