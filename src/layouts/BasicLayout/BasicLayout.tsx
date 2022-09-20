import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import TopBar from '../../components/TopBar/TopBar';
import Wrapper from '../Wrapper/Wrapper';
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from 'react-icons/bs';
import { IconContext } from 'react-icons';

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
      <IconContext.Provider value={{ color: "#ffffff", size: "17px" }}>
        <ScrollToTop smooth
          component={<BsArrowUp  />}
          style={{ 
            backgroundColor: '#000000', 
            width: '50px', height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </IconContext.Provider>
    </Wrapper>
  );
};

export default BasicLayout;