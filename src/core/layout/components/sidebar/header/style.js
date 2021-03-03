import { Box, IconButton as CoreIconButton } from '@material-ui/core';
import styled from 'styled-components';

export const SidebarHeaderIconButton = styled(CoreIconButton)`
  padding: var(--spacer) / 3;
  color: '#fff';
  background: rgba(255, 255, 255, 0.09);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

export const BoxTitle = styled(Box)`
  font-size: var(--font-size-base);
  padding-left: 10px;
  font-weight: bold;
  display: block;
  width: auto;
`;

export const SidebarHeaderContent = styled.div`
  height: var(--header-height);
  width: var(--sidebar-width);
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
  transition: 'all .2s ease-in-out';
  background-color: rgba(255, 255, 255, 1);
`;

export const Image = styled.img`
  height: 32px;
  width: 32px;
`;
