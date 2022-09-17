import React from 'react';
import { FaFacebookF, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import styles from './style.module.scss';

const Social = () => {
  return (
    <ul className={`${styles.list} ${styles['social-icons']}`}>
      <li className={styles.list__item}>
        <a href="#" title='OwOrganics on Facebook'><FaFacebookF /></a>
      </li>
      <li className={styles.list__item}>
        <a href="#" title='OwOrganics on Twitter'><AiOutlineTwitter /></a>
      </li>
      <li className={styles.list__item}>
        <a href="#" title='OwOrganics on Pinterest'><FaPinterest /></a>
      </li>
      <li className={styles.list__item}>
        <a href="#" title='OwOrganics on Instagram'><FaInstagram /></a>
      </li>
      <li className={styles.list__item}>
        <a href="#" title='OwOrganics on Youtube'><FaYoutube /></a>
      </li>
    </ul>
  );
};

export default Social;