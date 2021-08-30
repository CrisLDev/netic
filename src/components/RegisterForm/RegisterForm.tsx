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

import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './Styles';

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
  return (
    <Card className={classes.BackGround}>
      <ThemeProvider theme={theme}>
        <Box display="block" textAlign="center">
          <form noValidate autoComplete="off">
            <CardContent>
              <Typography className={classes.textColor}>Register</Typography>

              <TextField
                id="Email"
                label="Email"
                type="Email"
                color="primary"
                fullWidth
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
                fullWidth
                InputLabelProps={{
                  className: classes.textColor,
                }}
              />
            </CardContent>

            <CardActions>
              <Button
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
