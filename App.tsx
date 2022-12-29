import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import themeDefault from './src/styles/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
