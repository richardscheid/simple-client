import { Box, IconButton as CoreIconButton } from '@material-ui/core';
import { Link as DomLink } from 'react-router-dom';
import styled from 'styled-components';

export const IconButton = styled(CoreIconButton)`
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

export const Link = styled(DomLink)`
  text-decoration: none;
`;

export const LogoHeaderContent = styled.div`
  height: var(--header-height);
  width: var(--sidebar-width);
  display: flex;
  align-items: center;
  padding-left: var(--spacer);
  padding-right: var(--spacer);
  justify-content: space-between;
  transition: all 0.5s var(--app-sidebar-transition);
  background: rgba(255, 255, 255, 0.08);
`;

export const Image = styled.img`
  height: 32px;
  width: 32px;
`;
