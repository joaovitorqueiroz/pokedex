import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home';
import themeDefault from './src/styles/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
