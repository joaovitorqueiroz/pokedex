import { ThemeProvider } from 'styled-components/native';
import { Routes } from 'src/routes';
import themeDefault from 'src/styles/themes/default';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <QueryClientProvider client={client}>
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
