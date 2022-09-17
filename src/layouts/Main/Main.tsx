import React from 'react';
import Container from '../Container/Container';
import styles from './style.module.scss'

interface Props {
  children: JSX.Element | JSX.Element[],
}

const Main = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main__inner}>
          {children}
        </div>
      </Container>
    </main>
  );
};

export default Main;