import React from 'react';
import Container from '../Container/Container';
import styles from './style.module.scss'
import AmExSVG from '../../assets/images/payment-methods/amex.svg';
import MaestroSVG from '../../assets/images/payment-methods/maestro.svg';
import MasterSVG from '../../assets/images/payment-methods/mastercard.svg';
import ShopPaySVG from '../../assets/images/payment-methods/shop-pay.svg';
import VisaSVG from '../../assets/images/payment-methods/visa.svg';
import Social from '../../components/social/Social';
import { ThemeEnum } from '../../types/types';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__inner}>
          <div className={styles.footer__info}>
            <div className={styles.section}>
              <h3 className={styles.section__title}>Support</h3>
              <ul className={`${styles.list} ${styles['usefull-links']}`}>
                <li className={styles.list__item}>
                  <a href="#" className={`${styles.link} ${styles['link-usefull']}`}>FAQ</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#" className={`${styles.link} ${styles['link-usefull']}`}>STOCKIST</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#" className={`${styles.link} ${styles['link-usefull']}`}>PRESS</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#" className={`${styles.link} ${styles['link-usefull']}`}>AFFILIATES</a>
                </li>
              </ul>
            </div>
            <div className={styles.section}>
              <h3 className={styles.section__title}>Keep In Touch</h3>
              <p className={styles.section__subtitle}>We promise we won't write to you often</p>
              <form action="" name="newsletter" autoComplete='off' className={`${styles.form} ${styles['form-newsletter']}`}>
                <div className={styles['input-group']}>
                  <input type="email" name="email" id="email" placeholder='Your email' className={`${styles.input} ${styles['input-newsletter']}`} />
                  <button type="submit" className={`${styles.btn} ${styles['btn_underlined']}`}>Subscribe</button>
                </div>
              </form>
            </div>
            <div className={styles.section}>
              <h3 className={styles.section__title}>Contact</h3>
              <div className={styles.section__content}>
                <ul className={`${styles.list} ${styles['contacts-list']}`}>
                  <li className={styles.list__item}>
                    <a href='mailto:oworganic@gmail.com' className={`${styles.link} ${styles['link-contact']}`}>Oworganic@gmail.com</a>
                  </li>
                  <li className={styles.list__item}>
                    <a href='https://goo.gl/maps/REPnHhZTUVtPmZns9' className={`${styles.link} ${styles['link-contact']}`}>1638 ABBOT KINNEY BLVD - PH
                      VENICE, CA 90265</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer__copyright}>
            <div className={styles.section}>
              <div className={styles.section__content}>
                <Social theme={ThemeEnum.DARK}/>
              </div>
            </div>

            <div className={styles.section}>
              <p className={styles.section__content}>
                <span>© 2022, <b>Oworganic</b></span>
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.section__content}>
                <ul className={`${styles.list} ${styles['payment-list']}`}>
                  <li className={`${styles.list__item} ${styles['payment-method']}`}>
                    <img src={AmExSVG} alt='American Express icon' className={styles['payment-icon']} />
                  </li>
                  <li className={`${styles.list__item} ${styles['payment-method']}`}>
                    <img src={MaestroSVG} alt='Maestro icon' className={styles['payment-icon']} />
                  </li>
                  <li className={`${styles.list__item} ${styles['payment-method']}`}>
                    <img src={MasterSVG} alt='Mastercard icon' className={styles['payment-icon']} />
                  </li>
                  <li className={`${styles.list__item} ${styles['payment-method']}`}>
                    <img src={ShopPaySVG} alt='Shop Pay icon' className={styles['payment-icon']} />
                  </li>
                  <li className={`${styles.list__item} ${styles['payment-method']}`}>
                    <img src={VisaSVG} alt='Visa icon' className={styles['payment-icon']} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container >
    </footer >
  );
};

export default Footer;