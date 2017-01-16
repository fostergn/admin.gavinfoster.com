import React, { Component } from 'react';
import classNames from 'classnames';
import '../../styles/styles.css';
import logo from '../../images/logo.svg';
import Header from '../Header/HeaderContainer';

const App = ({children, location}) => {

      const mainClass = classNames({
        'main--login': location.pathname.includes('login'),
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
