import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRoute, routeList } from './RoutesList';

const Routes: React.FC = () => (
  <Switch>
    {routeList.map(( route: IRoute, i: number ) => (
      <Route
        key={i.toString()}
        exact
        path={route.path}
        component={route.view}
      />
    ))}
  </Switch>
);

export default Routes;
