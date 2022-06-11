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
      default: '#0d1117',
      overlay: '#161b22',
      accent: 'rgba(56,139,253,0.15)',
      accentEmphasis: '#1f6feb',
    },
    border: {
      default: '#30363d',
      accentEmphasis: '#1f6feb',
    },
    text: {
      primary: '#f0f3f6',
      accent: '#58a6ff',
    },
  },
  spacing: (size: number) => `${size * 8}px`,
  typography: {
    fontFamily: {
      regular: '"Noto Sans", sans-serif',
      display: '"Oranienbaum", serif',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
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
      body2: {
        fontSize: '14px',
        lineHeight: '21px',
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
      body2: {
        fontSize: '14px',
        lineHeight: '17.5px',
      },
    },
  },
};
