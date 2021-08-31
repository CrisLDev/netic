import React from 'react';

// Material Ui
import {
  Drawer, Hidden, makeStyles, Theme,
} from '@material-ui/core';
import SidebarContent from './SidebarContent';

const drawerWidth = 100;

interface ISidebarProps {
  state: boolean;
  handleClose: any;
}

const useStyles = makeStyles(( theme: Theme ) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& ::-webkit-scrollbar': {
      width: '0.5em',
      height: '0.5em',
    },
    '& ::-webkit-scrollbar-thumb': {
      background: '#0d95ca',
    },
    '& ::-webkit-scrollbar-track': {
      background: '#0caff0',
      boxShadow: 'inset 0px 0px 0px 0px #F0F0F0',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    borderTopRightRadius: '30px',
    backgroundColor: theme.palette.primary.main,
    '@media (max-height: 639.98px)': {
      borderTopRightRadius: '0!important',
    },
  },
}));

const Sidebar: React.FC<ISidebarProps> = ( props ) => {
  const { state, handleClose } = props;
  const classes = useStyles();

  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={state}
          onClose={handleClose}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SidebarContent />
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SidebarContent />
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
