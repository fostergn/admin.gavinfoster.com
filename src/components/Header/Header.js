import React from 'react';
import classNames from 'classnames';
import { signOut } from '../../firebaseAuth';
import { browserHistory } from 'react-router';

const Header = ({params}) =>  {

  console.log('params: ', params);
  console.log('params check: ', typeof params.id === 'undefined');

  const dashboardClasses = classNames({
    "header__nav-item": true,
    "header__nav-item--secondary": true,
    "header__nav-item--hidden": typeof params.id === 'undefined',
  })

  return (
    <header className="header">
      <h1 className="header__title">Gavin Foster Admin</h1>
      <nav className="header__nav">
        <p className={dashboardClasses} onClick={(e) => browserHistory.push('admin')}>Dashboard</p>
        <p className="header__nav-item" onClick={(e) => signOut(e)}>Logout</p>
      </nav>
    </header>
  );
}

export default Header;
