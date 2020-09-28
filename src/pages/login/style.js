import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dashboard from '../../assets/dashboard.jpg';

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LoginContainer = styled(LoginStyle)`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dashboard});
`;

export const LoginContent = styled(LoginStyle)`
  width: 430px;
  height: 280px;
  border-radius: 0.5rem;
  background-color: #f0f0f5;
`;

export const FormContent = styled.div`
  width: 85%;
`;

export const LoginTitle = styled.div`
  width: 100%;
  text-align: center;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: #1f0e3d;
  text-decoration: none;
`;
