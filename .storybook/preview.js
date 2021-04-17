import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import muiTheme from '../src/stylesheet/muiTheme';
import '../src/stylesheet/app.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((story) => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
));