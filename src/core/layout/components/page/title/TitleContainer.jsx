import React from 'react';
import PropTypes from 'prop-types';

import { PaperContainer, PaperDescription, PaperHeading, Title } from './style';

const TitleContainer = (props) => {
  const { title, description } = props;
  return (
    <>
      <PaperContainer square elevation={2}>
        <PaperHeading>
          <Title>{title}</Title>
          <PaperDescription>{description}</PaperDescription>
        </PaperHeading>
      </PaperContainer>
    </>
  );
};

TitleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { TitleContainer };
