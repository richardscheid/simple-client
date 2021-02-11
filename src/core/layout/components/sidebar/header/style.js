import { withStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';

export const StyledIconButton = withStyles({
  root: {
    width: 32,
    height: 32,
  },
})(IconButton);
