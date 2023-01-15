import { cn } from 'shared/lib/cn/cn';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={cn(cls.Loader, {}, [className])}>
    <div />
    <div />
  </div>
);
