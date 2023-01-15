import React from 'react';
import { useTheme } from 'shared/lib/theme/useTheme';
import { cn } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider/ThemeProvider';

interface Props {
  className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cn('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
