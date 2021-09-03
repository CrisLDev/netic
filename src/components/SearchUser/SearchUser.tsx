import {
  Grid, Paper, Box, InputBase, IconButton,
} from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React from 'react';
import { Styles } from './Styles';

const SearchUser:React.FC = () => {
  const classes = Styles();
  return (
    <Grid item xs={12}>
      <Paper elevation={3} className={classes.background}>
        <Box
          display="flex"
          justifyContent="center"
          padding="1em"
          alignItems="center"
        >
          <Box
            bgcolor="hsl(138.06,42.74%,25.25%)"
            padding="0.5em"
            borderRadius="5em"
          >
            <InputBase
              id="outlined-basic"
              placeholder="Search friend"
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchRounded />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SearchUser;
