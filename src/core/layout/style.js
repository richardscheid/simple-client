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

  ${({ sidebarFixed }) =>
    sidebarFixed &&
    css`
      height: 100vh;

      @include media-breakpoint-up(lg) {
        padding-left: var(--sidebar-width);
      }
    `}
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
