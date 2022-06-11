import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    sm: '544px',
    md: '768px',
    lg: '1012px',
    xl: '1280px',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#101216',
    },
    border: {
      default: '#30363d',
    },
    text: {
      primary: '#f0f3f6',
      accent: '#58a6ff',
    },
  },
  typography: {
    fontFamily: {
      regular: '"Noto Sans", sans-serif',
      display: '"Oranienbaum", serif',
    },
    desktop: {
      h00: {
        fontSize: '48px',
        lineHeight: '72px',
      },
      h0: {
        fontSize: '40px',
        lineHeight: '60px',
      },
    },
    mobile: {
      h00: {
        fontSize: '40px',
        lineHeight: '60px',
      },
      h0: {
        fontSize: '32px',
        lineHeight: '50px',
      },
    },
  },
};
