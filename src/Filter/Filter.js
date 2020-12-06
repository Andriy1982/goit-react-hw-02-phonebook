import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel } from './FilterStyledComponents';

function Filter({ name, onChangeFilter }) {
  return (
    <>
      <FilterLabel>
        Find contacts by name
        <input
          type="text"
          value={name}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </FilterLabel>
    </>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
