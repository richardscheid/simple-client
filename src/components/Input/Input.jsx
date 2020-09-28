import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { TextField, TextLabel } from './style';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(1),
    },
  })
);

const Input = (props) => {
  const classes = useStyles();
  const { label } = props;
  return (
    <FormControl fullWidth className={classes.root}>
      <TextLabel shrink>{label}</TextLabel>

      <TextField autoComplete="off" {...props} />
    </FormControl>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

Input.defaultProps = {
  id: null,
  type: 'text',
  label: null,
  error: false,
  disabled: false,
  required: false,
};

export { Input };
