import { Paper as CorePaper } from '@material-ui/core';
import styled from 'styled-components';

export const PaperContainer = styled(CorePaper)`
  margin: 14px 14px 14px;
  padding: 14px 42px 14px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(#ffff, 0.5);
  transition: var(--transition-base);
  position: relative;

  @include media-breakpoint-down(md) {
    flex-direction: column;
    padding-right: 14px;
  }
`;

export const PaperHeading = styled(PaperContainer)`
  padding-right: (14px);

  @include media-breakpoint-down(md) {
    padding-right: 0;
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
