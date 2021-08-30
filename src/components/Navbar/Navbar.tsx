import {
  AppBar,
  Box,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(( theme: Theme ) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing( 2 ),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  containerimg: {
    maxWidth: '1.4em',
  },
  sizeImg: {
    width: '100%',
    height: '100%',
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" alignItems="center" className={classes.title}>
            <div className={classes.containerimg}>
              <img
                src="./assets/logoneticapp.png"
                alt="logo"
                className={classes.sizeImg}
              />
            </div>
            <Typography variant="h6" className={classes.title}>
              Contact Chat UI
            </Typography>
          </Box>
          <Link to="/login" className={classes.link}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
