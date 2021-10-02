import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { authSaved } from '../Redux/ducks/AuthDucks';
import { getToken } from '../services/AuthServices';
import { IRoute, routeList } from './RoutesList';

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector(( state:any ) => state.auth.registerSuccess );
  useEffect(() => {
    const authRoutes = getToken();
    if ( authRoutes ) {
      dispatch( authSaved( true ));
    }
  }, [auth]);

  return (
    <Switch>
      {routeList.map(( route: IRoute, i: number ) => (
        <Route
          key={i.toString()}
          exact
          path={route.path}
          render={( props: any ) => {
            if ( route.privadeView || auth ) {
              if ( route.privadeView && auth ) {
                return <Redirect to="/" />;
              }
              return ( <route.view {...props} /> );
            }
            return <Redirect to="/login" />;

            /* route.privadeView || auth ? (
              route.privadeView === true || auth ? (
                <Redirect to="/Home" />
              ) : (
                <route.view {...props} />
              )
            ) : (
              <Redirect to="/login" />
            ) */
          }}
        />
      ))}
    </Switch>

  );
};

export default Routes;
