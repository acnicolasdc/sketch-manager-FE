import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SketchComponent from 'pages/Sketch';
import TicketComponent from 'pages/Ticket';

const PrivateRoutes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={TicketComponent} />
      <Route exact path="/Sketch" component={SketchComponent} />
    </Switch>
  );
};

export default PrivateRoutes;
