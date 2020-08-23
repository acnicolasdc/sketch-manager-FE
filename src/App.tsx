import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import SessionProvider from 'providers/session';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { createTheme, BaseProvider } from 'baseui';
import store from './redux';
import Routes from 'routes';

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
    <ReduxProvider store={store}>
      <SessionProvider>
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme}>
            <Routes>
            </Routes>
          </BaseProvider>
        </StyletronProvider>
      </SessionProvider>
    </ReduxProvider>
  );
}

export default App;
