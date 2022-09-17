import React from 'react';
import styles from './style.module.scss';
import { BiSearch } from 'react-icons/bi';


const Search = () => {
  return (
    <div className={styles.search}>
      <a href="#" className={styles.search__link}>
        <div className={styles.search__img}><BiSearch /></div>
      </a>
    </div>
  );
};

export default Search;