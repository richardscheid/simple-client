import React from 'react';
import { GlobalStyle, theme } from '@involves/violin';
import { AppContainer, PageContainer } from './style';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <PageContainer>
          <Routes />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
