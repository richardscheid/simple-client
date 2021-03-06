import { Typography as CoreTypography } from '@material-ui/core';
import styled from 'styled-components';

export const Typography = styled(CoreTypography)`
  padding: var(--spacer) var(--spacer) (var(--spacer) / 1.1);
  font-weight: bold;
  color: $blue;
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  white-space: nowrap;
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;
