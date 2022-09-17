import React from 'react';
import styles from './style.module.scss'

interface Props {
  children: JSX.Element | JSX.Element[],
}

const Wrapper = ({children}: Props) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

export default Wrapper;