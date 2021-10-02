import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  BackGround: {
    backgroundColor: '#5A4FFD!important',
    padding: '1rem',
    width: '100%',
  },
  Margin: {
    marginTop: '2rem',
  },
  textColor: {
    color: '#e3f2fd!important',
  },
  borderColor: {
    '&:hover': {
      borderColor: '#ff7961',
    },
  },
  textDecorate: {
    textDecoration: 'none',
    color: 'white',
  },
});
