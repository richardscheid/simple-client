import styled from 'styled-components';
import { Button as CoreButton } from '@material-ui/core';

export const Button = styled(CoreButton)`
  padding-left: 3px;
  padding-right: 3px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`;
