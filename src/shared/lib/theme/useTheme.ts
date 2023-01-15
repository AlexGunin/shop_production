import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from 'app/providers/ThemeProvider/ThemeProvider';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const switchTheme = {
  [Theme.LIGHT]: Theme.DARK,
  [Theme.DARK]: Theme.LIGHT,
};

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = switchTheme[theme];
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { toggleTheme, theme };
}
