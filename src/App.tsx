import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
<<<<<<< HEAD
// import {IndexRoute} from 'react-router';
=======
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
import Sketch from 'pages/Sketch';
<<<<<<< HEAD
import Login  from 'pages/Login';
=======
<<<<<<< HEAD
import Login from 'pages/Login';
=======
import Login  from 'pages/Login';
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
import Ticket from 'pages/Ticket';


const engine = new Styletron();

function App() {
  return (
  
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}> 
<<<<<<< HEAD
          <BrowserRouter>
            <Redirect from = '/' to = '/Login'/>
            {/* <IndexRoute component = {Login}/> */}
=======
<<<<<<< HEAD
          <Ticket/>
=======
          <BrowserRouter>
            <Redirect from = '/' to = '/Login'/>
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
              <Switch>
                <Route path="/Login"      component={Login} />
                <Route path="/Ticket"     component={Ticket} />
                <Route path="/Sketch"     component={Sketch} />
              </Switch>
          </BrowserRouter>
<<<<<<< HEAD
=======
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
