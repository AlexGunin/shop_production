import React, { FC } from 'react';
import { cn } from 'shared/lib/cn/cn';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}: AppLinkProps) => (
  <Link
    to={to}
    className={cn(cls.AppLink, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
