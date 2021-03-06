import styled from 'styled-components';
import {
  ListItem as CoreListItem,
  Button as CoreButton,
} from '@material-ui/core';
import { ExpandLessIcon as CoreExpand } from '@material-ui/icons/ExpandLess';

export const ListItem = styled(CoreListItem)`
  display: block;
  padding: 2px var(--spacer) 1px 0;
`;

export const Button = styled(CoreButton)`
  padding-top: var(--spacer) / 2.4;
  padding-bottom: var(--spacer) / 2.4;
  padding-right: var(--spacer) / 2;
  justify-content: flex-start;
  text-transform: none;
  border-radius: 0 22px 22px 0;
  font-size: 15px;
  width: 100%;
  font-weight: normal;
  transition: $transition-base;
  color: $blue;
  white-space: nowrap;

  padding-left: ${(props) => (props.depth > 0 ? 16 + 20 * props.depth : 22)};

  &.active,
  &:hover {
    color: var(--primary);
    background: #eeeff8;
  }
`;

export const WrapperButton = styled(CoreButton)`
  padding: 4px 17px;
  justify-content: flex-start;
  text-transform: none;
  width: 100%;
  border-radius: 3px;
  transition: $transition-base;
  font-weight: normal;

  &.depth-0 {
    font-weight: 500;
  }

  font-size: 14px;
  color: $blue;

  &.active,
  &:hover {
    background: none;
    color: $primary;
  }
`;

export const ExpandLessIcon = styled(CoreExpand)`
  margin-left: auto;
  height: 16px;
  width: 16px;
  opacity: 0.6;
  transition: $transition-base;
`;

export const ExpandLessIconRotate = styled(ExpandLessIcon)`
  opacity: 0.9;
  transform: rotate(180deg);
`;

export const LabelItem = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
