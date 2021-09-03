import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles({
  background: {
    background: 'hsl(138.06,42.74%,47.25%)',
  },
});

export const useStyles2 = makeStyles(( theme: Theme ) => createStyles({

  large: {
    width: theme.spacing( 7 ),
    height: theme.spacing( 7 ),
  },
}));
