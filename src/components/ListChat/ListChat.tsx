import {
  Box, Card, CardContent, CardHeader,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../Interfaces/UsersInterface';
import { chatOpen } from '../../Redux/ducks/ChatDunks';
import { getUsers } from '../../Redux/ducks/getUsersDuncks';
import { RootState } from '../../Redux/Store';
import { useStyles, ColorButton } from './Styles';

const ListChat:React.FC = ( ) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( getUsers());
  }, []);
  const user = useSelector(( state:RootState ) => state.users.loaduser );
  const loading = useSelector(( state:RootState ) => state.users.loading );

  const selectChat = ( id:string | undefined ):void => {
    // eslint-disable-next-line no-underscore-dangle

    dispatch( chatOpen( id ));
  };

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
              user.map(( e:IUser ) => (
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
                      <b>{e.email}</b>

                    </h6>

                  </Box>
                </ColorButton>
              )))
          }

        </CardContent>
      </Card>
    </>
  );
};

export default ListChat;
