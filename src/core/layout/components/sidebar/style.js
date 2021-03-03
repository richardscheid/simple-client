import { Drawer as CoreDrawer, Paper as CorePaper } from '@material-ui/core';
import styled from 'styled-components';

export const Drawer = styled(CoreDrawer)`
  width: 270;
  min-height: 100%;
  padding-top: 0;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
`;

export const Paper = styled(CorePaper)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  z-index: 60;
  width: 270;
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  position: ${(props) => (props.fixed ? 'static' : 'fixed')};
`;
