import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const StyledIconButton = withStyles({
  root: {
    width: 16,
    height: 16,
  },
})(IconButton);

export const StyledSidebarHeader = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
