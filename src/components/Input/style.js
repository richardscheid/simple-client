import styled from 'styled-components';

import { makeStyles, createStyles } from '@material-ui/core/styles';

export const TextFieldContainer = styled.div`
  margin-bottom: 12px;
`;

export const TextFieldStyles = makeStyles((theme) =>
  createStyles({
    input: {
      backgroundColor: theme.palette.common.white,
    },
  })
);
