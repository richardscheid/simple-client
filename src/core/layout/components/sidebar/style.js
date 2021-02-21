import { withStyles } from '@material-ui/styles';
import { Drawer, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const SidebarWrapper = withStyles({
  root: {
    width: 270,
    minHeight: '100%',
    paddingTop: 0,
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column',
  },
})(Drawer);

export const SidebarPaper = styled(Paper)`
  display: 'flex';
  flex-direction: 'column';
  min-height: '100%';
  overflow: 'hidden';
  z-index: 60;
  width: 270;
  transition: 'all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)';
  position: ${(props) => (props.fixed ? 'static' : 'fixed')};
`;
