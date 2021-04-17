import { createMuiTheme } from '@material-ui/core';

const fontFamily = [
  'Poppins',
  '"Segoe UI"',
  'SegoeUI',
  '"Microsoft JhengHei"',
  '微軟正黑體',
  '"SF Pro TC"',
  '"SF Pro Display"',
  '"SF Pro Icons"',
  '"PingFang TC"',
  '"Helvetica Neue"',
  '"Helvetica"',
  '"Arial"',
  'sans-serif',
].join(',');

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    egPalette: {
      deep: {
        main: string,
        dark: string,
      },
      success: {
        main: string,
        dark: string,
      },
      warning: {
        main: string,
        dark: string,
      }
    };
    egShadows: string[]
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    egPalette: {
      deep: {
        main: string,
        dark: string,
      },
      success: {
        main: string,
        dark: string,
      },
      warning: {
        main: string,
        dark: string,
      }
    };
    egShadows: string[]
  }
}

const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#3b3b3b',
      secondary: '#6b6b6b'
    },
    primary: {
      main: '#05c7f2',
      dark: '#0097B9',
    },
    secondary: {
      main: '#E95050',
      dark: '#B13D3D'
    },
    action: {
      disabledBackground: '#bac1be'
    }
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      lineHeight: '4.5rem'
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 'bold',
      lineHeight: '3.8125rem'
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '3.625rem'
    },
    h4: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      lineHeight: '2.75rem'
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: '2.375rem'
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: '1.8125rem'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
  },
  egPalette: {
    deep: {
      main: '#0474AD',
      dark: '#004B71'
    },
    success: {
      main: '#58CFA3',
      dark: '#3E9072'
    },
    warning: {
      main: '#ffbc6e',
      dark: '#CB9557'
    },
  },
  egShadows: [
    '0 3px 16px 0 rgba(10, 75, 109, 0.08)',
    '0 6px 26px 0 #efeff7'
  ]
});

// for develop
// eslint-disable-next-line no-console
if (process.env.NODE_ENV !== 'production') console.log(muiTheme);

export default muiTheme;
