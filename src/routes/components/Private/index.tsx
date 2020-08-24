import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SketchComponent from 'pages/Sketch';
import TicketComponent from 'pages/Ticket';
import NotFound from 'components/NotFound';

const PrivateRoutes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={TicketComponent} />
      <Route exact path="/Sketch/:sketchId" component={SketchComponent} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
