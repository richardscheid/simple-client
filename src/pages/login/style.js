import styled from 'styled-components';
import dashboard from '../../assets/dashboard.jpg';

export const LoginContainer = styled.div`
  width: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dashboard}) !important;
`;

export const LoginForm = styled.form`
  margin-bottom: 4px;
`;
