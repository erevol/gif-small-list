/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './styles';

const GifItem = ({
  item: {
    id,
    image,
  },
}) => {
  return (
    <StyledCard>
      <img src={image} alt={id} />
    </StyledCard>
  );
};

GifItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default GifItem;
