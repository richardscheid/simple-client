import styled, { css } from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: all 0.5s var(--app-sidebar-transition);
`;

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;

  ${({ fixedMenu }) =>
    fixedMenu &&
    css`
      display: flex;
    `}
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  transition: all 0.5s var(--app-sidebar-transition);
  padding-top: var(--header-height);

  ${({ footerFixed }) =>
    footerFixed &&
    css`
      padding-bottom: var(--footer-height);
      height: auto;
    `}

  ${({ fixedMenu }) =>
    fixedMenu &&
    css`
      height: 100vh;
    `}
`;

export const InnerContent = styled.div`
  padding: var(--layout-spacer) var(--layout-spacer) (var(--layout-spacer) / 2);
  display: flex;
  flex: 1;
`;

export const WrapperContent = styled.div`
  display: block;
  width: 100%;
`;
