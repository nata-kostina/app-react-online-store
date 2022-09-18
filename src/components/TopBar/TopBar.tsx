import React from 'react';
import Container from '../../layouts/Container/Container';
import { ThemeEnum } from '../../types/types';
import Social from '../social/Social';
import styles from './style.module.scss'

const TopBar = () => {
  return (
    <section className={styles.topbar}>
      <Container>
        <div className={styles.topbar__inner}>
          <p className={styles.promo}>FREE SHIPPING ON ALL ORDERS OVER $100</p>
          <Social theme={ThemeEnum.LIGHT}/>
        </div>
      </Container>
    </section>
  );
};

export default TopBar;