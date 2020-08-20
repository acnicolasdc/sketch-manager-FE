import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
import Sketch from 'pages/Sketch';
<<<<<<< HEAD
import Login from 'pages/Login';
=======
import Login  from 'pages/Login';
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
import Ticket from 'pages/Ticket';


const engine = new Styletron();

function App() {
  return (
  
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}> 
<<<<<<< HEAD
          <Ticket/>
=======
          <BrowserRouter>
            <Redirect from = '/' to = '/Login'/>
              <Switch>
                <Route path="/Login"      component={Login} />
                <Route path="/Ticket"     component={Ticket} />
                <Route path="/Sketch"     component={Sketch} />
              </Switch>
          </BrowserRouter>
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
