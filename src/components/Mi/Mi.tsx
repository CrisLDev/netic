import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useStyles } from './style';

const Mi:React.FC = () => {
  const classes = useStyles();
  const hola = 'Hola';
  return (
    <Box display="flex" justifyContent="center" alignItems="center" alignSelf>
      <Button variant="contained" className={classes.with}>
        <h1>
          {hola}
          {' '}
          this is my perfil
        </h1>
      </Button>
    </Box>
  );
};

export default Mi;
