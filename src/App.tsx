import React from 'react';
import { ThemeProvider } from '@emotion/react'
import Authenticated from './Authenticated';
import "./App.css"
import {theme} from './theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Authenticated />
    </ThemeProvider>
  );
}

export default App;
