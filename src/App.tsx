import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, createTheme } from 'baseui';
import Sketch from 'pages/Sketch';
import Login  from 'pages/Login';
import Ticket from 'pages/Ticket';

const primitives = {
  accent: '#0581C1', // hot pink
  accent50: '#E0F3FA',
  accent100: '#C1E6F5',
  accent200: '#069BD7',
  accent300: '#0471A9',
  accent400: '#046191',
  accent500: '#035179',
  accent600: '#034161',
  accent700: '#023048',
};
const overrides = {
  colors: {
    buttonPrimaryFill: primitives.accent,
    buttonPrimaryText: '#FFF',
    buttonPrimaryHover: primitives.accent200,
    buttonPrimaryActive: primitives.accent300,
    buttonPrimarySelectedFill: primitives.accent200,
    buttonPrimarySelectedText: '#FFF',
    buttonPrimarySpinnerForeground: primitives.accent700,
    buttonPrimarySpinnerBackground: primitives.accent300,
  },
};

const theme = createTheme(primitives, overrides);
const engine = new Styletron();

function App() {
  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}> 
          <BrowserRouter>
            <Redirect from = '/' to = '/Sketch'/>
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
