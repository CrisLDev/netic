/* eslint-disable no-underscore-dangle */
import {
  Box, Card, CardContent, CardHeader,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../Interfaces/UsersInterface';
import { chatOpen } from '../../Redux/ducks/ChatDunks';
import { active, desconect, getUsers } from '../../Redux/ducks/getUsersDuncks';
import { RootState } from '../../Redux/Store';
import socket from '../Socket/Socket';
import { useStyles, ColorButton } from './Styles';

const ListChat:React.FC = ( ) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( getUsers());
  }, [dispatch]);
  const user = useSelector(( state:RootState ) => state.users.loaduser );
  const loading = useSelector(( state:RootState ) => state.users.loading );
  const users = useSelector(( state:RootState ) => state.users.loaduser );
  const activeUser = useSelector(
    ( state:RootState ) => state.users.activeuser,
  );
  const selectChat = ( id:string | undefined ):void => {
    // eslint-disable-next-line no-underscore-dangle

    dispatch( chatOpen( id ));
  };

  /* const userConect = ( ):void => {
    if ( user.length > 0 ) {
      const array = [user[0], activeUser[0]];
    }
  }; */

  /* useEffect(() => {
    userConect();
  }, [user, activeUser]); */

  useEffect(() => {
    if ( users ) {
      // eslint-disable-next-line array-callback-return
      users.map(( list:IUser ):void => {
        socket.emit( 'listUserCli', {
          idUser: list._id,
        });
      });
    }
  }, [users]);

  useEffect(() => {
    socket.on( 'listUser', ( connect ) => {
      // eslint-disable-next-line no-console
      console.log( connect );
      if ( connect.listUser ) {
        dispatch( active( connect ));
      } else {
        dispatch( desconect( connect ));
      }
    });
  }, []);
  return (
    <>
      <Card>
        <CardHeader
          className={classes.background}
          title={(
            <>
              <Box
                display="inherit"
                alignContent="center"
                textAlign="center"
              >

                <b className={classes.textAling}>Lista de contactos</b>

              </Box>
            </>
          )}
        />
        <CardContent className={classes.noMargin}>
          {
            loading ? (
              <Box
                display="inherit"
                alignContent="center"
                textAlign="center"
              >
                <b className={classes.Textcolor}>Cargando...</b>
              </Box>
            ) : (
              user.map(( e:IUser ) => {
                let con = [];
                if ( activeUser ) {
                  con = activeUser.filter(
                    ( list:any ) => list.idUser === e._id,
                  );
                }
                return (
                  <ColorButton
                    className={`${classes.whidth} ${classes.background}}`}
                    variant="contained"
                    // eslint-disable-next-line no-underscore-dangle
                    key={e._id}
                    // eslint-disable-next-line no-underscore-dangle
                    onClick={() => selectChat( e._id )}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                    >

                      <h6 className={`${classes.noMargin} 
                ${classes.userName} 
                ${classes.Textcolor}`}
                      >
                        <b>{e.username}</b>
                        <br />
                        <b>{e.email}</b>
                        <br />
                        {con.length > 0 ? (
                          <h5
                            className={`${classes.padding} 
                     ${classes.colorConect}`}
                          >
                            connect

                          </h5>

                        ) : (

                          <h5
                            className={`${classes.padding} 
                      ${classes.colorDisconect}`}
                          >
                            disconnect

                          </h5>

                        )}

                      </h6>

                    </Box>
                  </ColorButton>
                );
              }))
          }

        </CardContent>
      </Card>
    </>
  );
};

export default ListChat;
