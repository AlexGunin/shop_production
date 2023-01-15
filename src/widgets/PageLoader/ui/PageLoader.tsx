import { cn } from 'shared/lib/cn/cn';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cn(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
