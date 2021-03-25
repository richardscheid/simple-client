import React from 'react';
import PropTypes from 'prop-types';

import { PaperContainer, Title } from './style';

const TitleContainer = (props) => {
  const { title } = props;
  return (
    <>
      <PaperContainer square elevation={2}>
        <Title>{title}</Title>
      </PaperContainer>
    </>
  );
};

TitleContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export { TitleContainer };
