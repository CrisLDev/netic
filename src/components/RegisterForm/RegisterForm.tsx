import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
// import { pink } from '@material-ui/core/colors';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../Redux/ducks/AuthDucks';
import { useStyles } from './Styles';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const theme = createTheme({
  palette: {
    primary: {
      main: '#b09fa5',
    },
    secondary: {
      main: '#212c6f',
    },
    success: {
      main: '#4caf50',
    },
  },
});

const RegisterForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [registerForm, setregisterForm] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = ( e: InputChange ): void => {
    setregisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ): void => {
    e.preventDefault();
    dispatch( register( registerForm ));
  };

  const { email, password, username } = registerForm;
  return (
    <Card className={classes.BackGround}>
      <ThemeProvider theme={theme}>
        <Box display="block" textAlign="center">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <CardContent>
              <Typography className={classes.textColor}>Register</Typography>

              <TextField
                id="Email"
                label="Email"
                type="Email"
                color="primary"
                fullWidth
                name="email"
                value={email}
                onChange={handleInputChange}
                InputLabelProps={{
                  className: classes.textColor,
                }}
                inputProps={{
                  bordercolor: classes.borderColor,
                }}
                required
              />
              <TextField
                id="userName"
                label="User Name"
                color="primary"
                name="username"
                value={username}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{
                  className: classes.textColor,
                }}
                inputProps={{
                  bordercolor: classes.borderColor,
                }}
              />

              <TextField
                id="Password"
                label="Password"
                type="password"
                color="primary"
                name="password"
                value={password}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{
                  className: classes.textColor,
                }}
              />
            </CardContent>

            <CardActions>
              <Button
                type="submit"
                color="primary"
                size="large"
                variant="outlined"
                fullWidth
                className={classes.textColor}
              >
                Learn More
              </Button>
            </CardActions>

            <Typography>
              <Link
                rel="stylesheet"
                to="/login"
                className={classes.textDecorate}
              >
                You already have an account? log in by pressing here
              </Link>
            </Typography>
          </form>
        </Box>
      </ThemeProvider>
    </Card>
  );
};

export default RegisterForm;
