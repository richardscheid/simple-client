import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, PageContainer } from './style';
import { GlobalStyle, theme, createTheme } from '@involves/violin';

import Routes from './routes';

const customTheme = createTheme({
  palette: {
    primary: theme.palette.cyan,
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
