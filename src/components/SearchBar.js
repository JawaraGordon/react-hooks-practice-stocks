import React from 'react';

function SearchBar({ sort, onChangeSort, filter, onChangeFilter }) {
  function handleSortChange(e) {
    onChangeSort(e.target.value);
  }

  function handleFilterChange(e) {
    onChangeFilter(e.target.value);
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="A-Z"
          name="sort"
          checked={sort === 'A-Z'}
          onChange={handleSortChange}
        />
        A-Z
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === 'Price'}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
