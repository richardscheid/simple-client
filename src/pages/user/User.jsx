import React from 'react';
import { useTranslation } from 'react-i18next';
import { TitleContainer, PageContainer } from '../../core/layout/components';
import { FilterContainer } from './style';
import { Input } from '../../components';

const User = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <TitleContainer title={t('menu.user.title')} />

      <PageContainer>
        <FilterContainer>
          <Input label={t('terms.user')} />
          <Input label={t('terms.email')} />
        </FilterContainer>
      </PageContainer>
    </>
  );
};

export { User };
