import React, { useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './style';
import { me } from '../../Redux/ducks/getUsersDuncks';
import { RootState } from '../../Redux/Store';

const Mi:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( me());
  }, []);
  const perfil = useSelector(( state:RootState ) => state.users.me );
  const loadme = useSelector(( state:RootState ) => state.users.loadme );
  return (
    <Box display="flex" justifyContent="center" alignItems="center" alignSelf>

      <Button
        variant="contained"
        className={classes.with}
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log( 'diste click' );
        }}
      >
        {loadme ? (
          <h1>
            Sus Datos estan Cargando
          </h1>
        ) : (
          <h1>
            {perfil.username}
            <br />
            {perfil.email}
          </h1>
        )}

      </Button>
    </Box>
  );
};

export default Mi;
