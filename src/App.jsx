import React from 'react';
import { AppContainer } from './style';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppContainer>
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
