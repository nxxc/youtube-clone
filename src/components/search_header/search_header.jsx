import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = '';
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='images/logo.png' alt='logo' />
        <span>Youtube</span>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='search....'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.search} src='images/search.png' alt='search' />
      </button>
    </header>
  );
};

export default SearchHeader;
