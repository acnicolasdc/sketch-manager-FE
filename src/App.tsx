import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
import Sketch from 'pages/Sketch';

const engine = new Styletron();

function App() {
  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Sketch />
        </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
