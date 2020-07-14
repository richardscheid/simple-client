import styled from 'styled-components';
import dashboard from '../../assets/dashboard.jpg';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dashboard}) !important;
`;

export const LoginForm = styled.form``;
