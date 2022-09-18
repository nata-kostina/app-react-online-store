import React from 'react';
import styles from './style.module.scss'

interface Props {
  children: JSX.Element | JSX.Element[],
  title?: string,
  subtitle?: string,
}

const Section = ({ children, title, subtitle }: Props) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      {subtitle && <p className={styles.section__subtitle}>{subtitle}</p>}
      <div className={styles.section__conten}>{children}</div>
    </section>
  );
};

export default Section;