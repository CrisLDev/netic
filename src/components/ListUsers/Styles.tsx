import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles({
  background: {
    background: 'hsl(247.13,58.37%,24.96%)',
  },
  cursor: {
    cursor: 'pointer',
  },
});

export const useStyles2 = makeStyles(( theme: Theme ) => createStyles({

  large: {
    width: theme.spacing( 7 ),
    height: theme.spacing( 7 ),
  },
}));
