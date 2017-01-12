import React, { Component } from 'react';
import classNames from 'classnames';
import '../../styles/styles.css';
import logo from '../../images/logo.svg';
import Header from '../Header/HeaderContainer';
// import Footer from '../Footer/FooterContainer';

const App = ({children, location}) => {

      const mainClass = classNames({
        'main--login': location.pathname.includes('login'),
        'main--sidebar': location.pathname.includes('admin'),
      });

      return (
        <div>
          <Header />
          <main className={mainClass}>
            {children}
          </main>
        </div>
      )};

export default App;
