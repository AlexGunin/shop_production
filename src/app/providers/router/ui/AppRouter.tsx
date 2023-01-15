import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>{t('LOADING')}</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
