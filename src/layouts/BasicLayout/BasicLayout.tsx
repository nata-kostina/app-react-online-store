import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import TopBar from '../../components/TopBar/TopBar';
import Wrapper from '../Wrapper/Wrapper';

interface Props {
  children: JSX.Element | JSX.Element[],
}

const BasicLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <TopBar />
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default BasicLayout;