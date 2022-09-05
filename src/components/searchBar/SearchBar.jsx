import React from 'react';
import './SearchBar.css'

function SearchBar({ search, handleSearch }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='search for a beer'
        name='search'
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
