import React from 'react';
import { cn } from 'shared/lib/cn/cn';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <Button
      className={cn('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={handleChangeLanguage}
    >
      {t('language')}
    </Button>
  );
};
