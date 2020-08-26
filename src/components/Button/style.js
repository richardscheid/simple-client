import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const StyledButton = withStyles({
  root: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
})(Button);
