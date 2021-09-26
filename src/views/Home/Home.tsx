import React, { useEffect } from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import InicitalContainer from '../../components/InictialContainer/InicitalContainer';
import ListChat from '../../components/ListChat/ListChat';
import ChatExample from '../../components/Chat/ChatExample';
import Mi from '../../components/Mi/Mi';
import { RootState } from '../../Redux/Store';
import socket from '../../components/Socket/Socket';

const Home: React.FC = () => {
  const activeChat = useSelector(( state:RootState ) => state.chat.activeChat );
  const close = useSelector(( state:RootState ) => state.chat.close );
  const perfil = useSelector(( state:RootState ) => state.users.me );

  useEffect(() => {
    socket.emit( 'connection' );
    // eslint-disable-next-line no-underscore-dangle
    socket.emit( 'addUser', perfil._id );
    // eslint-disable-next-line no-console
    console.log( `${perfil} hola` );
    socket.on( 'userList', ( usersConnected ) => {
      // eslint-disable-next-line no-console
      console.log( usersConnected );
    });
  }, [perfil]);

  return (
    <InicitalContainer>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Box display="flex" justifyContent="center" p={2}>
              Consigue una prueba click abajo!
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {activeChat.length > 0 && close === false ? (
            activeChat.map(( chat:any ) => (
              <>
                {/* eslint-disable-next-line no-underscore-dangle*/}
                <ChatExample key={chat._id} chatSelect={chat} perfil={perfil} />
              </>
            ))
          ) : (
            <Mi />

          )}

        </Grid>
        <Grid item xs={6}>
          <ListChat />
        </Grid>
      </Grid>
    </InicitalContainer>
  );
};
export default Home;
