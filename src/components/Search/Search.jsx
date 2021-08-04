import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput } from './styles';

const Search = ({
  handleSubmit,
  handleChange,
  query,
  placeholder,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <StyledInput
      id="search"
      onChange={handleChange}
      type="search"
      name="search"
      placeholder={placeholder}
      value={query}
    />
  </StyledForm>
);

Search.defaultProps = {
  query: '',
  placeholder: '',
};

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Search;
