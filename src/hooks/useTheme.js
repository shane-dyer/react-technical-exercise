import { useState, useEffect } from 'react';
import { isDayTime } from '../utils/date';

const themeFromStorage = localStorage.getItem('theme');
const getThemeByDateTime = () => isDayTime() ? 'light' : 'dark';

// Custom hook to manage the app theme
const useTheme = () => {
  // Theme from storage takes precedence over theme from date time
  const [theme, setTheme] = useState(themeFromStorage || getThemeByDateTime());

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  // Update the theme depending on the time of day (7am to 7pm = light theme, otherwise dark)
  // If a user has clicked the theme toggle button, clear the interval
  useEffect(() => {
    const interval = setInterval(() => {
      const themeFromStorage = localStorage.getItem('theme');
      if (themeFromStorage) {
        clearInterval(interval);
      } else {
        setTheme(getThemeByDateTime());
      }
    }, 60000); // 1 minute

    return () => clearInterval(interval);
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
