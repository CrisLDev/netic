import { Grid } from '@material-ui/core';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login:React.FC = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >

    <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
      <LoginForm />
    </Grid>

  </Grid>
);

export default Login;
