import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const { query, onSearch } = props;

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="search coin"
        value={query}
        onChange={onSearch}
      />
    </div>
  );
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
