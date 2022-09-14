import React from 'react';
import {StyledEngineProvider, ThemeProvider} from "@mui/material";
import {theme} from './theme/theme';
import Authenticated from './Authenticated';
import "./App.css"
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
          <Authenticated />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
