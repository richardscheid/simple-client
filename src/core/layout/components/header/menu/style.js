import styled from 'styled-components';
import {
  Divider as CoreDivider,
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

export const Divider = styled(CoreDivider)`
  margin-top: 8px;
  width: 100%;
`;

export const MenuContainer = styled.div`
  background-color: #fff;
  background-clip: padding-box;
  min-width: 11rem;
  list-style: none;
`;

export const UserContent = styled.div`
  margin-top: 8px;
`;

export const UserDetail = styled.div`
  font-weight: bold;
`;
