import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
