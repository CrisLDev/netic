import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import ChatExample from '../../components/Chat/ChatExample';
// eslint-disable-next-line max-len
import InicitalContainer from '../../components/InictialContainer/InicitalContainer';
import ListChat from '../../components/ListChat/ListChat';

const Home: React.FC = () => (
  <InicitalContainer>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          <Box display="flex" justifyContent="center" p={2}>
            Consigue una prueba click abajo!
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <ChatExample />
      </Grid>
      <Grid item xs={6}>
        <ListChat />
      </Grid>
    </Grid>
  </InicitalContainer>
);

export default Home;
