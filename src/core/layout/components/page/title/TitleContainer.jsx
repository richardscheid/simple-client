import React from 'react';
import PropTypes from 'prop-types';

import { PaperContainer, PaperHeading, Title } from './style';

const TitleContainer = (props) => {
  const { title } = props;
  return (
    <>
      <PaperContainer square elevation={2}>
        <PaperHeading>
          <Title>{title}</Title>
        </PaperHeading>
      </PaperContainer>
    </>
  );
};

TitleContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export { TitleContainer };
