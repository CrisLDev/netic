import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  cardHeader: {
    background: '#17AECC',
  },
  cardActions: {
    borderTop: '1px solid #D5D5D5',
  },
  noMargin: {
    margin: 0,
  },
  userName: {
    color: '#fff',
    marginLeft: '1em',
  },
  nakedInput: {
    width: '100%',
  },
  someone: {
    width: 'fit-content',
    background: '#34ADCC',
    padding: '3px',
    borderRadius: '0.2em',
    color: '#fff',
  },
  you: {
    width: 'fit-content',
    background: 'rgb(69, 172, 100)',
    padding: '3px',
    borderRadius: '0.2em',
    color: '#fff',
  },

  heightCard: {
    minHeight: '20em',

  },
});
