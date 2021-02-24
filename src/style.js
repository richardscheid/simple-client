import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  box-sizing: border-box;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 87px 16px 16px;
  @media (min-width: 500px) {
    padding: 87px 4% 100px;
  }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --spacer: 1rem;
    --font-size: 16px;
    --header-height: 78px;
    --sidebar-width: 270px;
    --font-size-base: 1rem;
    --font-size-lg: 1rem * 1.25;
    --font-size-sm: 1rem * .875;
  }
`;
