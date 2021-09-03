import {
  Button, makeStyles, Theme, withStyles,
} from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';

export const useStyles = makeStyles({

  noMargin: {
    margin: '0em',
  },
  userName: {
    color: '#fff',
  },
  Textcolor: {
    color: 'hsl(230.85,48.36%,47.84%)',
    fontSize: '14px',
  },
  whidth: {
    width: '100%',
    marginTop: '0.5em',
  },
  background: {
    background: 'hsl(230.85,48.36%,47.84%)',
  },
  textAling: {
    textAlign: 'center',
    color: '#ffff',
  },

});

export const ColorButton = withStyles(( theme: Theme ) => ({
  root: {
    color: theme.palette.getContrastText( lightBlue[500]),
    backgroundColor: lightBlue[400],
    '&:hover': {
      backgroundColor: lightBlue[600],
    },
  },
}))( Button );
