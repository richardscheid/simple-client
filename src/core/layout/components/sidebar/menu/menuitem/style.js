import styled from 'styled-components';
import {
  ListItem as CoreListItem,
  Button as CoreButton,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const ListItem = styled(CoreListItem)`
  display: block;
  padding: 2px var(--spacer) 1px 0;
`;

export const MenuButton = styled(CoreButton)`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  justify-content: flex-start;
  text-transform: none;
  border-radius: 0 22px 22px 0;
  font-size: 15px;
  width: 100%;
  font-weight: normal;
  transition: var(--transition-base);
  color: var(--blue);
  white-space: nowrap;

  padding-left: ${(props) => (props.depth > 0 ? (16 + 20) * props.depth : 22)};

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
  transition: var(--transition-base);
  font-weight: normal;

  &.depth-0 {
    font-weight: 500;
  }

  font-size: 14px;
  color: $blue;

  &.active,
  &:hover {
    background: none;
    color: var(--primary);
  }
`;

export const ExpandLess = styled(ExpandLessIcon)`
  margin-left: auto;
  height: 16px;
  width: 16px;
  opacity: 0.6;
  transition: var(--transition-base);
`;

export const ExpandLessRotate = styled(ExpandLess)`
  opacity: 0.9;
  transform: rotate(180deg);
`;

export const LabelItem = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
