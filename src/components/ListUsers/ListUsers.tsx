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
          bgcolor="hsl(138.06,42.74%,47.25%)"
          padding="1em"
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
      </CardContent>
    </Card>
  );
};

export default ListUsers;
