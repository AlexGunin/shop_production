import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const KEYS = {
  main: 'NAV_LINK.MAIN',
  about: 'NAV_LINK.ABOUT',
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls.container, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/main">
        {t(KEYS.main)}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t(KEYS.about)}
      </AppLink>
    </div>
  );
};
