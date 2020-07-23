import React from 'react';
import { AppContainer } from './style';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, createTheme } from '@involves/violin';

import Routes from './routes';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: theme.palette.black,
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <AppContainer>
        <GlobalStyle />
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
