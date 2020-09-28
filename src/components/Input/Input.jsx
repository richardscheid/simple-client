import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { TextField } from './style';

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
      <InputLabel shrink>{label}</InputLabel>

      <TextField autoComplete="off" {...props} />
    </FormControl>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

Input.defaultProps = {
  id: null,
  type: 'text',
  label: null,
  helperText: null,
  error: false,
  disabled: false,
  required: false,
};

export { Input };
