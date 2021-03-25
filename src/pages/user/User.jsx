import React from 'react';
import { useTranslation } from 'react-i18next';
import { TitleContainer, PageContainer } from '../../core/layout/components';

const User = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <TitleContainer title={t('menu.user.title')} />

      <PageContainer />
    </>
  );
};

export { User };
