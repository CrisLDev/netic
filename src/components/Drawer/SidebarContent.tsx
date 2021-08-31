import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  whiteTextColor: {
    color: `white`,
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
  },
});

const SidebarContent: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="block" textAlign="center">
        <Link to="/">
          <Typography className={classes.whiteTextColor}>
            Hola
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default SidebarContent;
