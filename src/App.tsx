import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import {IndexRoute} from 'react-router';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
import Sketch from 'pages/Sketch';
import Login  from 'pages/Login';
import Ticket from 'pages/Ticket';


const engine = new Styletron();

function App() {
  return (
  
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}> 
          <BrowserRouter>
            <Redirect from = '/' to = '/Login'/>
            {/* <IndexRoute component = {Login}/> */}
              <Switch>
                <Route path="/Login"      component={Login} />
                <Route path="/Ticket"     component={Ticket} />
                <Route path="/Sketch"     component={Sketch} />
              </Switch>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
