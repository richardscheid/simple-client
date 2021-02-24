import { IconButton as CoreIconButton } from '@material-ui/core';
import styled from 'styled-components';

export const IconButton = styled(CoreIconButton)`
  padding: var(--spacer) / 2;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;
