import React from 'react';
import { signOut } from '../../firebaseAuth';

const Header = ({ toggleSetting }) =>  {

  return (
    <header className="header">
      <h1 className="header__title">Gavin Foster Admin</h1>
      <nav className="header__nav">
        <p className="header__nav-item" onClick={(e) => signOut(e)}>Logout</p>
      </nav>
    </header>
  );
}

export default Header;
