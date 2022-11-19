import { ThemeTextColorKeys } from '@sebek78-nx/types';
import { DefaultTheme } from 'styled-components';

type ThemeTextColor = {
  [k in ThemeTextColorKeys]: string;
};

const text: ThemeTextColor = {
  default: '#f0f3f6',
  accent: '#58a6ff',
  attention: '#d29922',
  secondary: '#a371f7',
  danger: '#f85149',
};

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
      subtle: '#161b22',
      inset: '#010409',
      /* colors */
      accentSubtle: 'rgba(56,139,253,0.15)',
      accentEmphasis: '#1f6feb',
      attentionSubtle: 'rgba(187,128,9,0.15)',
      attentionEmphasis: '#9e6a03',
      dangerSubtle: ' rgba(248,81,73,0.15)',
      dangerEmphasis: '#da3633',
      successSubtle: 'rgba(46,160,67,0.15)',
      successEmphasis: '#238636',
    },
    border: {
      default: '#30363d',
      accent: '#1f6feb',
      success: '#238636',
      danger: '#da3633',
    },
    text,
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
      h1: {
        fontSize: '32px',
        lineHeight: '48px',
      },
      h2: {
        fontSize: '24px',
        lineHeight: '36px',
      },
      h3: {
        fontSize: '20px',
        lineHeight: '30px',
      },
      body1: {
        fontSize: '16px',
        lineHeight: '24px',
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
      h1: {
        fontSize: '26px',
        lineHeight: '40px',
      },
      h3: {
        fontSize: '18px',
        lineHeight: '25px',
      },
      h2: {
        fontSize: '24px',
        lineHeight: '36px',
      },
      body1: {
        fontSize: '16px',
        lineHeight: '20px',
      },
      body2: {
        fontSize: '14px',
        lineHeight: '17.5px',
      },
    },
  },
};
