import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SessionContext } from 'providers/session';
import PublicRoutes from './components/Public';
import PrivateRoutes from './components/Private';

const Router: React.FunctionComponent = () => {
  const { session } = useContext(SessionContext);    
  return (
    <BrowserRouter basename='/sketch-manager-FE'>
      {session ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default Router;
