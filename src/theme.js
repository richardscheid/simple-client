import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;
