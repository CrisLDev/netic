import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
  Paper,
} from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
    color: 'green',
  },
});

const LoginForm: React.FC = () => {
  const classes = useStyles();
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const [loggedError, setLoggedError] = useState( false );

  const handleInputChange = ( e: InputChange ): void => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const { username, password } = loginInfo;

  const history = useHistory();

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ): any => {
    e.preventDefault();
    dispatch( authLogin( loginInfo ));
    if ( username === 'admin' && password === 'admin' ) {
      history.push( '/' );
    }
    setLoggedError( true );
    setTimeout(() => {
      setLoggedError( false );
    }, 3000 );
  };

  return (
    <Card className={classes.root}>
      <Box display="block" alignContent="center" textAlign="center">
        <CardContent>
          <h2>Login</h2>
          {loggedError && (
            <Paper elevation={1}>
              <Box>
                <h6>Haz introducido información incorrecta, porfavor intenta denuevo!</h6>
              </Box>
            </Paper>
          )}
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
