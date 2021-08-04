/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styles';
import GifItem from '../GifItem';

const GifGrid = ({ images }) => {
  return (
    <StyledContainer>
      {
        images.length > 0 && images.map((item) => (
          <GifItem key={item?.id} item={item} />
        ))
      }
    </StyledContainer>
  );
};

GifGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default GifGrid;
