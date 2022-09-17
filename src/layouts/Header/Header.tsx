import React from 'react';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import Container from '../Container/Container';
import styles from './style.module.scss'
import Search from '../../components/Search/Search';
import Cart from './../../components/Cart/Cart';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <Logo />
          <Navigation />
          <ul className={`${styles.list} ${styles.tools}`}>
            <li className={styles.list__item}><Search /></li>
            <li className={styles.list__item}><Cart /></li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;