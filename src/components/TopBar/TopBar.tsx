import React from 'react';
import Container from '../../layouts/Container/Container';
import Social from '../Social/Social';
import styles from './style.module.scss'

const TopBar = () => {
  return (
    <section className={styles.topbar}>
      <Container>
        <div className={styles.topbar__inner}>
          <p className={styles.promo}>FREE SHIPPING ON ALL ORDERS OVER $100</p>
          <Social/>
        </div>
      </Container>
    </section>
  );
};

export default TopBar;