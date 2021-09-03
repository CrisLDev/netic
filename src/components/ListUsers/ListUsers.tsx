import {
  Avatar, Box, Card, CardContent, Grid, Paper,
} from '@material-ui/core';
import React from 'react';
import { useStyle, useStyles2 } from './Styles';

const ListUsers:React.FC = () => {
  const classes = useStyle();
  const avatar = useStyles2();
  // eslint-disable-next-line max-len
  const url = 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/06/Google-Imagenes-Main-Site.jpg?resize=768%2C512&ssl=1';
  return (
    <Card>
      <CardContent>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"

        >
          <Box
            padding="1em"
            display="flex"
            bgcolor="hsl(247.13,58.37%,24.96%)"
            borderRadius="2em"
            className={classes.cursor}
          >
            <Grid item>
              <Avatar src={url} className={avatar.large} />
            </Grid>
            <Paper elevation={3} className={classes.background}>
              <Grid item>
                <b>
                  @pucho jenzo
                  {' '}
                  <br />
                  Desarrollador developer
                </b>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </CardContent>

      <CardContent>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"

        >
          <Box
            padding="1em"
            display="flex"
            bgcolor="hsl(247.13,58.37%,24.96%)"
            borderRadius="2em"
            className={classes.cursor}
          >
            <Grid item>
              <Avatar src={url} className={avatar.large} />
            </Grid>
            <Paper elevation={3} className={classes.background}>
              <Grid item>
                <b>
                  @pucho jenzo
                  {' '}
                  <br />
                  Desarrollador developer
                </b>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ListUsers;
