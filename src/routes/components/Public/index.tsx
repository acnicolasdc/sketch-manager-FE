import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from 'pages/Login'

const PublicRoutes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginComponent} />
      <Route exact path="*" component={LoginComponent} />
    </Switch>
  );
};

export default PublicRoutes;
