import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { Auth, Routes } from './core';
import { AppContainer } from './style';

import theme from './theme';

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
