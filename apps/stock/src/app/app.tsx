import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@sebek78-nx/util';
import { AppRoot } from '@sebek78-nx/lib-stock';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoot />
    </ThemeProvider>
  );
}

export default App;
