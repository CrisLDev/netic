import React from 'react';
import {
  Card, CardContent, CardActions, CardHeader, Fab, Avatar, Box, InputBase, Grid,
} from '@material-ui/core';
import { SendRounded } from '@material-ui/icons';
import { useStyles } from './Styles';

const ChatExample: React.FC = () => {
  const classes = useStyles();
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
              <Avatar src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/06/Google-Imagenes-Main-Site.jpg?resize=768%2C512&ssl=1" />
              {/* eslint-disable-next-line max-len */}
              <h6 className={`${classes.noMargin} ${classes.userName}`}><b>Enzo Tamaquiza</b></h6>
            </Box>
          </>
        )}
      />
      <CardContent className={classes.heightCard}>
        <p className={classes.someone}>Hola, como estás?</p>
        <Box display="flex" justifyContent="flex-end">
          <p className={classes.you}>Bien, y tu?</p>
        </Box>
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
            />
          </Grid>
          <Grid item xs={1}>
            <Fab
              size="small"
            >
              <SendRounded />
            </Fab>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ChatExample;
