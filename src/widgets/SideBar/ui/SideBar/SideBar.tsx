import React, { useState } from 'react';
import { cn } from 'shared/lib/cn/cn';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { t, i18n } = useTranslation();

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(cls.SideBar, { [cls.collapsed]: isCollapsed }, [className])}
    >
      <button type="button" onClick={onToggle}>
        {t('toggle')}
      </button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
