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
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogin } from '../../Redux/ducks/AuthDucks';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const useStyles = makeStyles({
  root: {
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
  BackGround: {
    backgroundColor: '#5A4FFD!important',
    padding: '1rem',
    width: '100%',
  },
  margen: {
    margin: '0em',
    padding: '0em',
  },
});

const LoginForm: React.FC = () => {
  const classes = useStyles();
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = ( e: InputChange ): void => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const { username, password } = loginInfo;

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ): void => {
    e.preventDefault();
    dispatch( authLogin( loginInfo ));
  };

  return (
    <Card className={classes.BackGround}>
      <Box display="block" alignContent="center" textAlign="center">
        <CardContent>
          <h1 className={classes.margen}>#Contact Chat UI</h1>
          <h2>Login</h2>

          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="nameUser"
              label="Name User"
              name="username"
              onChange={handleInputChange}
              value={username}
              fullWidth
              required
            />
            <TextField
              id="nameUser"
              label="Name User"
              name="password"
              fullWidth
              value={password}
              onChange={handleInputChange}
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
