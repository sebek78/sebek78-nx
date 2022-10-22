import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@sebek78-nx/util';
import { AppRoot } from '@sebek78-nx/lib-stock';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoot />
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
