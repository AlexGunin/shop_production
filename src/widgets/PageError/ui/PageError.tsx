import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn/cn';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={window.location.reload}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
