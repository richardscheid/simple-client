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
  padding-left: 16 / 2;
  font-size: 16 * 1.1;
  font-weight: 'bold';
  width: 'auto';
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
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;

export const Image = styled.img`
  height: 32px;
  width: 32px;
`;
