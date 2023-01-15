import React, { createContext, useMemo, useState } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface IThemeProvider {
  children: React.ReactNode;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const provideValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={provideValue}>
      {children}
    </ThemeContext.Provider>
  );
};
