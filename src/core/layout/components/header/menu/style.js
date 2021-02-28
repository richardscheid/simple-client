import styled from 'styled-components';
import {
  Button as CoreButton,
  Menu as CoreMenu,
  List as CoreList,
} from '@material-ui/core';

export const Button = styled(CoreButton)`
  padding-left: 3px;
  padding-right: 3px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`;

export const Menu = styled(CoreMenu)`
  margin-left: var(--spacer * 0.5);
`;

export const List = styled(CoreList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const MenuContainer = styled.div`
  background-color: #fff;
  background-clip: padding-box;
  min-width: 11rem;
  list-style: none;
  border: 1px solid rgba($black, 0.15);
`;

export const UserContent = styled.div`
  padding: 2px 3px 0 3px;
`;
