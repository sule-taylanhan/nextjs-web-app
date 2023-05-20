import React, { useState } from 'react';
import classes from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Performing search for:', searchText);
    // Display feedback to the user after searching
    alert(`Searching for: ${searchText}`);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleChange}
        />
        <button className={classes.searchButton} onClick={handleSearch}>
          <FaSearch className={classes.searchIcon} />
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
