import {
  Box, Card, CardContent, CardHeader,
} from '@material-ui/core';
import React from 'react';
import { useStyles, ColorButton } from './Styles';

const ListChat:React.FC = () => {
  const classes = useStyles();

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
          <ColorButton className={`${classes.whidth} ${classes.background}}`}>
            <Box
              display="flex"
              alignItems="center"
            >

              <h6 className={`${classes.noMargin} 
                ${classes.userName} 
                ${classes.Textcolor}`}
              >
                <b>@Jonathan vera</b>

              </h6>

            </Box>
          </ColorButton>
          <ColorButton
            className={`${classes.whidth} ${classes.background}}`}
            variant="contained"
          >
            <Box
              display="flex"
              alignItems="center"
            >

              <h6 className={`${classes.noMargin} 
                ${classes.userName} 
                ${classes.Textcolor}`}
              >
                <b>@Mucho kiza</b>

              </h6>

            </Box>
          </ColorButton>
        </CardContent>
      </Card>
    </>
  );
};

export default ListChat;
