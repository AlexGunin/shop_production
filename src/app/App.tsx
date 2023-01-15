import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'shared/lib/theme/useTheme';
import { bindCn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const cnApp = bindCn('app', {});

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cnApp([theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
