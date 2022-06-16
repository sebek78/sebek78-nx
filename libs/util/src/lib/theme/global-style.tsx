import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color-scheme: dark; /* for override the browser autocomplete styles */
  }
  body{
    font-family: 'Noto Sans', sans-serif;
  }
`;
