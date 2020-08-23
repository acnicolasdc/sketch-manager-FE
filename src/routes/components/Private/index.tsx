import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SketchComponent from 'pages/Sketch';
import TicketComponent from 'pages/Ticket';

const PrivateRoutes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={TicketComponent} />
      <Route exact path="/Sketch/:sketchId" component={SketchComponent} />
      <Route children={<h1>404</h1>} />
    </Switch>
  );
};

export default PrivateRoutes;
