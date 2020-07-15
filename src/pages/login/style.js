import styled from 'styled-components';
import dashboard from '../../assets/dashboard.jpg';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dashboard}) !important;
`;

export const LoginContent = styled.form`
  width: 250px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f5;
`;
