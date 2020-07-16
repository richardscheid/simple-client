import styled from 'styled-components';
import dashboard from '../../assets/dashboard.jpg';

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LoginContainer = styled(LoginStyle)`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dashboard});
`;

export const LoginContent = styled(LoginStyle)`
  width: 350px;
  height: 250px;
  margin: 30px;
  border-radius: 0.5rem;
  background-color: #f0f0f5;
`;
