import { Box, IconButton as CoreIconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { rgba } from 'polished';
import styled from 'styled-components';

export const IconButton = withStyles({
  root: {
    padding: 16 / 3,
    color: '#fff',
    background: rgba(255, 255, 255, 0.09),
    hover: {
      background: rgba(255, 255, 255, 0.14),
    },
  },
})(CoreIconButton);

export const BoxHeader = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
})(Box);

export const BoxTitle = withStyles({
  root: {
    paddingLeft: 16 / 2,
    fontSize: 16 * 1.1,
    fontWeight: 'bold',
    width: 'auto',
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

export const Image = styled.img`
  height: 32px;
  width: 32px;
`;
