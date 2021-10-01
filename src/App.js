import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import baseTheme from './themes/InitialTheme';
import HomePage from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;