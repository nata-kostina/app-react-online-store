import React from 'react';
import styles from './style.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <a href="#" className={styles.nav__link}>Homepage</a>
          </li>
        <li className={styles.list__item}>
          <a href="#" className={styles.nav__link}>Shop</a>
          </li>
        <li className={styles.list__item}>
          <a href="#" className={styles.nav__link}>About us</a>
          </li>
      </ul>
    </nav>
  );
};

export default Navigation;