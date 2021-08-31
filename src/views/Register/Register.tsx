import { Grid } from '@material-ui/core';
import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register:React.FC = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >

    <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
      <RegisterForm />
    </Grid>

  </Grid>
);

export default Register;
