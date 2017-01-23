import React, { Component } from 'react';
import classNames from 'classnames';
import '../../styles/styles.scss';
import logo from '../../images/logo.svg';
import Header from '../Header/HeaderContainer';

const App = ({children, location, params}) => {

      const mainClass = classNames({
        'main--login': location.pathname.includes('login'),
      });

      return (
        <div>
          <Header params={params} />
          <main className={mainClass}>
            {children}
          </main>
        </div>
      )};

export default App;
