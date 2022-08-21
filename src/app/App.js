import React, { useState } from 'react';
import { Provider } from 'react-redux';
import NotesContainer from './notes/components/NotesContainer';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { lightTheme, darkTheme } from './theme';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <NotesContainer theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
