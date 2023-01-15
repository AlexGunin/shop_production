import { ButtonHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button({
  className,
  theme = ThemeButton.CLEAR,
  children,
  ...otherProps
}: Props) {
  return (
    <button
      type="button"
      className={cn(cls.Button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
