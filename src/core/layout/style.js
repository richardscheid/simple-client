import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: all 0.5s var(--app-sidebar-transition);
`;

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
