import { withStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';

export const SidebarWrapper = withStyles({
  root: {
    minHeight: 100,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 0,
    width: 100,
  },
})(Drawer);
