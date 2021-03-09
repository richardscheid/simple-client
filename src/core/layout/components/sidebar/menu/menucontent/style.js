import { Typography as CoreTypography } from '@material-ui/core';
import styled from 'styled-components';

export const Typography = styled(CoreTypography)`
  padding: 10px 10px 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  white-space: nowrap;
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;
