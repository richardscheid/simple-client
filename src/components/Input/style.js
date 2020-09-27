import styled from 'styled-components';

import { withStyles, createStyles, fade } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

export const TextFieldContainer = styled.div`
  margin-bottom: 12px;
`;

export const TextField = withStyles((theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);
