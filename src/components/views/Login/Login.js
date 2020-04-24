import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  buttonStyle: {
    '& > *': {
      margin: theme.spacing(2.5),
    },
  },
}));

const Login = () => {

  const classes = useStyles();

  return(
    <form className={classes.root} noValidate autoComplete="off">
      <div className={styles.component}>
        <TextField
          required
          id="outlined-required"
          label="Login"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
      <div className={classes.buttonStyle}>
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default Login;
