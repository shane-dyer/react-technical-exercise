import { useState, useEffect } from 'react';
import { isDayTime } from '../utils/date';

const themeFromStorage = localStorage.getItem('theme');
const themeFromDateTime = isDayTime() ? 'light' : 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(themeFromStorage || themeFromDateTime);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const themeFromStorage = localStorage.getItem('theme');
      if (!themeFromStorage) {
        const newTheme = isDayTime() ? 'light' : 'dark';
        setTheme(newTheme);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [theme, toggleTheme];
};
