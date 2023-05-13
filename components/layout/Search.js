import React from 'react';
import classes from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search button clicked');
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <input className={classes.searchInput} type="text" placeholder="Search..." />
        <button className={classes.searchButton} onClick={handleSearch}>
          <FaSearch className={classes.searchIcon} />
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
