import React from 'react';
import styles from './style.module.scss'

interface Props {
  perRow: number,
  handleChangeView: (value: number) => void,
}

const View = ({perRow, handleChangeView}: Props) => {
  return (
    <div className={styles['view-group']}>
      <button type="button" className={`${styles.btn} ${styles['btn-view']} ${styles['btn-view_2']} 
      ${perRow === 2 && styles['btn-view_active']}`} onClick={() => handleChangeView(2)}></button>
      <button type="button" className={`${styles.btn} ${styles['btn-view']} ${styles['btn-view_3']}
      ${perRow === 3 && styles['btn-view_active']}`} onClick={() => handleChangeView(3)}></button>
      <button type="button" className={`${styles.btn} ${styles['btn-view']} ${styles['btn-view_4']}
      ${perRow === 4 && styles['btn-view_active']}`} onClick={() => handleChangeView(4)}></button>
    </div>
  );
};

export default View;