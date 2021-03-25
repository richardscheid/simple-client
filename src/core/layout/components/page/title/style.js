import { Paper as CorePaper } from '@material-ui/core';
import styled from 'styled-components';

export const PaperContainer = styled(CorePaper)`
  padding: 10px 10px 10px 20px;
  position: relative;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
`;
