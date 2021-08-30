import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#5A4FFD!important',
    padding: '1rem',
    width: '100%',
  },
  margin: {
    marginTop: '1em',
  },
  textDecorate: {
    textDecoration: 'none',
    color: 'white',
  },
});

const LoginForm: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display="block" alignContent="center" textAlign="center">
        <CardContent>
          <h2>Login</h2>
          <form noValidate autoComplete="off">
            <TextField id="nameUser" label="Name User" fullWidth required />
            <TextField
              id="nameUser"
              type="password"
              label="Name User"
              fullWidth
              required
            />
            <CardActions>
              <Button
                className={classes.margin}
                variant="outlined"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </CardActions>
            <Typography className={classes.margin}>
              <Link
                rel="stylesheet"
                to="/register"
                className={classes.textDecorate}
              >
                do not have an account yet? create it on time!
              </Link>
            </Typography>
          </form>
        </CardContent>
      </Box>
    </Card>
  );
};

export default LoginForm;
