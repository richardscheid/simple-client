import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import { Auth } from './core/auth/authentication';
import { Routes } from './core/routes';

import { AppContainer } from './style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppContainer>
        <BrowserRouter>
          <Auth>
            <Routes />
          </Auth>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
