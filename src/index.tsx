import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/200.css'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
