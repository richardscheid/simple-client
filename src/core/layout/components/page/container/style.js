import styled from 'styled-components';
import {
  Card as CoreCard,
  CardContent as CoreContent,
} from '@material-ui/core';

export const Card = styled(CoreCard)`
  margin-bottom: 4px;
  overflow: visible;
`;

export const CardContent = styled(CoreContent)`
  padding: 3px;
`;
