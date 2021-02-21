import { withStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';

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
