import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about_page');

  return <div>{t('ABOUT_PAGE.TITLE')}</div>;
};
export default AboutPage;
