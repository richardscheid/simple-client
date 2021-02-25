import { createMuiTheme } from '@material-ui/core/styles';

import typography from './core/theme/typography';
import variables from './core/theme/variables';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: variables.primary,
    },
    grey: {
      300: variables.inheritDefault1,
      A100: variables.inheritDefault2,
    },
    secondary: {
      main: variables.secondary,
    },
    error: {
      main: variables.red,
    },
    success: {
      main: variables.green,
    },
    warning: {
      main: variables.orange,
    },
    helpers: {
      primary: variables.blue,
      main: 'rgba(25, 46, 91, .035)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: '0.5rem',
  },
  overrides: {
    MuiButton: {
      text: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      containedSizeSmall: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      root: {
        textTransform: 'none',
        fontWeight: 'normal',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: variables.second,
        padding: '8px 16px',
        fontSize: '13px',
      },
      arrow: {
        color: variables.second,
      },
    },
  },
  typography,
});

export default theme;
