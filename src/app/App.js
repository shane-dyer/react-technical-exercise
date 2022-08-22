import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import NotesContainer from './notes/components/NotesContainer';
import store from './store';
import { lightTheme, darkTheme } from './theme';
import useTheme from '../hooks/useTheme';

const App = () => {
  // Custom hook to manage the app theme
  const [theme, toggleTheme] = useTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <NotesContainer theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
