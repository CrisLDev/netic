/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  Card, CardContent,
  CardActions, CardHeader, Fab, Box, InputBase, Grid, Button,
} from '@material-ui/core';
import { SendRounded, CloseRounded } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'timeago.js';
import { useStyles } from './Styles';
import socket from '../Socket/Socket';
import { closeChats } from '../../Redux/ducks/ChatDunks';
import {
  loadeMessage, newMessage, newMessageRecived,
} from '../../Redux/ducks/messageDunks';
import { IUser } from '../../Interfaces/UsersInterface';
import { MessageInterface } from '../../Interfaces/MessageInterface';

interface Ichat {
  chatSelect: any;
  perfil: IUser;
}
const ChatExample: React.FC<Ichat> = ({ chatSelect, perfil }) => {
  // eslint-disable-next-line no-underscore-dangle
  if ( chatSelect.userId._id === perfil._id ) {
    // eslint-disable-next-line no-param-reassign
    chatSelect.userId = chatSelect.meId;
  }
  const classes = useStyles();
  const [mensajeUser, setMensaje] = useState( '' );
  const dispatch = useDispatch();
  const [messageSoc, setMessageSoc] = useState({});

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    dispatch( loadeMessage( chatSelect._id ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatSelect]);

  useEffect(() => {
    socket.on( 'reciveMessage', ( data ) => {
      setMessageSoc({
        sender: data.senderId,
        text: data.message,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if ( messageSoc ) {
      dispatch( newMessageRecived( messageSoc ));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageSoc]);

  const submit = ( e:any ):void => {
    e.preventDefault();
    // enviar mensaje a la base de datos
    const mensaje:MessageInterface = {
      chatId: chatSelect._id,
      sender: perfil._id,
      text: mensajeUser,
    };
    dispatch( newMessage( mensaje ));

    // enviar mensaje al servidor en tiempo real
    socket.emit( 'sendMessage', {
      message: mensajeUser,
      senderId: perfil._id,
      reciveId: chatSelect.userId._id,
    });

    setMensaje( '' );
  };

  const scrollToBottom = (): void => {
    document.getElementById( 'scroll' )?.scrollIntoView({ behavior: 'smooth' });
  };
  const arrayMessage = useSelector(( state:any ) => state.message.message );
  useEffect(() => {
    scrollToBottom();
  }, [arrayMessage]);

  const onClick = ():void => {
    dispatch( closeChats( true ));
  };

  return (
    <Card className={classes.heightCard}>
      <CardHeader
        className={classes.cardHeader}
        title={(
          <>
            <Box
              display="flex"
              alignItems="center"
            >
              {/* eslint-disable-next-line max-len */}
              {/* <Avatar src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/06/Google-Imagenes-Main-Site.jpg?resize=768%2C512&ssl=1" /> */}
              {/* eslint-disable-next-line max-len */}
              <h6 className={`${classes.noMargin} ${classes.userName}`}><b>{chatSelect.userId.username}</b></h6>
              <Box onClick={() => { onClick(); }}>
                <CloseRounded />
              </Box>
            </Box>
          </>
        )}
      />
      <form onSubmit={submit}>
        <CardContent className={classes.cardContentHeight}>
          {
            // eslint-disable-next-line array-callback-return
            arrayMessage.map(( e:any, index:number ) => {
              // eslint-disable-next-line no-underscore-dangle
              if ( e.sender === perfil._id ) {
                return (
                  <Box display="flex" justifyContent="flex-end">
                    <p key={index.toString()} className={classes.you}>
                      {e.text}
                      <br />
                      <Box
                        fontSize="12px"
                        display="flex"
                        justifyContent="flex-end"
                      >
                        <Box>
                          {format( e.createdAt )}
                        </Box>
                      </Box>
                    </p>
                  </Box>
                );
              }
              if ( e.sender === chatSelect.userId._id ) {
                return (
                  <p className={classes.someone}>
                    {e.text}
                    <br />
                    <Box
                      fontSize="12px"
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Box>
                        {format( e.createdAt )}
                      </Box>
                    </Box>
                  </p>
                );
              }
            })
          }
          <div id="scroll" />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Grid
            alignContent="flex-end"
            container
            direction="row"
            alignItems="center"
          >
            <Grid item xs={10}>
              <InputBase
                className={classes.nakedInput}
                defaultValue="Naked input"
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="Escribe aqui..."
                value={mensajeUser}
                onChange={( e ) => {
                  setMensaje( e.target.value );
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Button type="submit">
                <Fab
                  size="small"
                >
                  <SendRounded />
                </Fab>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default ChatExample;
