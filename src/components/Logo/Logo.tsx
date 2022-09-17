import React from 'react';
import styles from './style.module.scss';
import LogoImg from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logo__link}>
        <img src={LogoImg} alt="logo" className={styles.logo__img} />
      </a>
    </div>
  );
};

export default Logo;