import React from 'react';
import { makeStyles } from '@material-ui/core';

interface IInitialContainerProps{
  children: JSX.Element;
}

const useStyles = makeStyles({
  marginTop: {
    marginTop: '7em',
  },
});

const InicitalContainer: React.FC<IInitialContainerProps> = ( props ) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.marginTop}>
      {children}
    </div>
  );
};

export default InicitalContainer;
