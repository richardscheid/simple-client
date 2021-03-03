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

export const LayoutContent = styled.div`
  flex: 1;
  display: flex;
  padding: 0;
  flex-direction: column;
  transition: all 0.5s var(--app-sidebar-transition);
  padding-top: var(--header-height);
`;

export const InnerContent = styled(LayoutContent)`
  padding: var(--layout-spacer) var(--layout-spacer) (var(--layout-spacer) / 2);
  display: flex;
  flex: 1;
`;

export const WrapperContent = styled(InnerContent)`
  display: block;
  width: 100%;
`;
