import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
import Sketch from 'pages/Sketch';
import Login from 'pages/Login/index';


const engine = new Styletron();

function App() {
  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Login />
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
